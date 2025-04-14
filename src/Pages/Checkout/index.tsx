import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { InputGroup, Row, TabButton } from './styles'

import Button from '../../components/Button'
import Card from '../../components/Card'

import barcode from '../../assets/images/barcode.png'
import creditCard from '../../assets/images/credit-card.png'

import { usePurchaseMutation } from '../../services/api'
import { RootReducer } from '../../store'
import { convertToBRL, getTotalPrice } from '../../utils/utils'

type Installment = {
  quantity: number
  amount: number
  formattedAmount: string
}

const Checkout = () => {
  const [payWithCard, setPayWithcard] = useState(false)
  const [purchase, { data, isSuccess }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [installments, setInstallments] = useState<Installment[]>([])

  const totalPrice = getTotalPrice(items)

  const form = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      cpf: '',
      deliveryEmail: '',
      confirmDeliveryEmail: '',
      cardOwner: '',
      cpfCardOwner: '',
      cardDisplayName: '',
      cardNumber: '',
      expiresMonth: '',
      expiresYear: '',
      cardCode: '',
      installments: 1
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      email: Yup.string()
        .email('E-mail Inválido')
        .required('E-mail é obrigatório'),
      cpf: Yup.string()
        .min(14, 'O campo precisa ter no mínimo 14 caracteres')
        .max(14, 'O campo só pode ter no máximo 14 caracteres')
        .required('E-mail é obrigatório'),
      deliveryEmail: Yup.string()
        .email('E-mail Inválido')
        .required('E-mail é obrigatório'),
      confirmDeliveryEmail: Yup.string()
        .oneOf([Yup.ref('deliveryEmail')], 'Os e-mails são diferentes')
        .required('O campo é obrigatório'),

      cardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cpfCardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardDisplayName: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      installments: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        billing: {
          document: values.cpf,
          email: values.email,
          name: values.fullName
        },
        delivery: {
          email: values.deliveryEmail
        },
        payment: {
          installments: 1,
          card: {
            active: payWithCard,
            code: Number(values.cardCode),
            name: values.cardDisplayName,
            number: values.cardNumber,
            owner: {
              document: values.cpfCardOwner,
              name: values.cardOwner
            },
            expires: {
              month: 1,
              year: 2024
            }
          }
        },
        products: [
          {
            id: 1,
            price: 10
          }
        ]
      })
    }
  })

  const checkInputError = (fieldName: string) => {
    const changed = fieldName in form.touched
    const invalid = fieldName in form.errors
    const hasError = changed && invalid

    return hasError
    return ''
  }

  useEffect(() => {
    const calculateInstallments = () => {
      const installmentsArray: Installment[] = []
      for (let i = 1; i <= 6; i++) {
        installmentsArray.push({
          quantity: i,
          amount: totalPrice / i,
          formattedAmount: convertToBRL(totalPrice / i)
        })
      }

      return installmentsArray
    }

    if (totalPrice > 0) {
      setInstallments(calculateInstallments)
    }
  }, [totalPrice])

  if (items.length === 0) {
    return <Navigate to="/" />
  }

  return (
    <div className="globalContainer">
      {isSuccess ? (
        <Card title="Muito obrigado">
          <>
            {data && (
              <p>
                É com satisfação que informamos que recebemos seu pedido com
                sucesso! <br />
                Abaixo estão os detalhes da sua compra: <br />
                Número do pedido: {data.orderId} <br />
                Forma de pagamento:{' '}
                {payWithCard ? 'Cartão de Crédito' : 'Boleto Bancário'}
              </p>
            )}
            <p className="margin-top">
              Caso tenha optado pelo pagamento via boleto bancário, lembre-se de
              que a confirmação pode levar até 3 dias úteis. Após a aprovação do
              pagamento, enviaremos um e-mail contendo o código de ativação do
              jogo.
            </p>
            <p className="margin-top">
              Se você optou pelo pagamento com cartão de crédito, a liberação do
              código de ativação ocorrerá após a aprovação da transação pela
              operadora do cartão. Você receberá o código no e-mail cadastrado
              em nossa loja.
            </p>
            <p className="margin-top">
              Pedimos que verifique sua caixa de entrada e a pasta de spam para
              garantir que receba nossa comunicação. Caso tenha alguma dúvida ou
              necessite de mais informações, por favor, entre em contato conosco
              através dos nossos canais de atendimento ao cliente.
            </p>
            <p className="margin-top">
              Agradecemos por escolher a StartSelect Store e esperamos que
              desfrute do seu jogo!
            </p>
          </>
        </Card>
      ) : (
        <form onSubmit={form.handleSubmit}>
          <Card title="Dados de cobrança">
            <>
              <Row>
                <InputGroup>
                  <label htmlFor="fullName">Nome Completo</label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={form.values.fullName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputError('fullName') ? 'error' : ''}
                  />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="email">E-mail</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.values.email}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputError('email') ? 'error' : ''}
                  />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="cpf">CPF</label>
                  <input
                    id="cpf"
                    type="text"
                    name="cpf"
                    value={form.values.cpf}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputError('cpf') ? 'error' : ''}
                  />
                </InputGroup>
              </Row>
              <h3>Dados de entrega - conteúdo digital</h3>
              <Row>
                <InputGroup>
                  <label htmlFor="deliveryEmail">E-mail</label>
                  <input
                    id="deliveryEmail"
                    type="email"
                    name="deliveryEmail"
                    value={form.values.deliveryEmail}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputError('deliveryEmail') ? 'error' : ''}
                  />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="confirmDeliveryEmail">
                    Confirme o e-mail
                  </label>
                  <input
                    id="confirmDeliveryEmail"
                    type="email"
                    name="confirmDeliveryEmail"
                    value={form.values.confirmDeliveryEmail}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputError('confirmDeliveryEmail') ? 'error' : ''
                    }
                  />
                </InputGroup>
              </Row>
            </>
          </Card>
          <Card title="Pagamento">
            <>
              <TabButton
                type="button"
                isActive={!payWithCard}
                onClick={() => setPayWithcard(false)}
                title="Clique para pagar via Boleto Bancário"
              >
                <img src={barcode} alt="Boleto" />
                Boleto Bancário
              </TabButton>
              <TabButton
                type="button"
                isActive={payWithCard}
                onClick={() => setPayWithcard(true)}
                title="Clique para pagar via Cartão de Crédito"
              >
                <img src={creditCard} alt="Cartão de Crédito" />
                Cartão de Crédito
              </TabButton>
              {payWithCard ? (
                <>
                  <Row>
                    <InputGroup>
                      <label htmlFor="cardOwner">
                        Nome do Titular do Cartão
                      </label>
                      <input
                        id="cardOwner"
                        type="text"
                        name="cardOwner"
                        value={form.values.cardOwner}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputError('cardOwner') ? 'error' : ''}
                      />
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="cpfCardOwner">
                        CPF do Titular do Cartão
                      </label>
                      <input
                        id="cpfCardOwner"
                        type="text"
                        name="cpfCardOwner"
                        value={form.values.cpfCardOwner}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputError('cpfCardOwner') ? 'error' : ''
                        }
                      />
                    </InputGroup>
                  </Row>
                  <Row marginTop="24px">
                    <InputGroup>
                      <label htmlFor="cardDisplayName">Nome no Cartão</label>
                      <input
                        id="cardDisplayName"
                        type="text"
                        name="cardDisplayName"
                        value={form.values.cardDisplayName}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputError('cardDisplayName') ? 'error' : ''
                        }
                      />
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="cardNumber">Número do Cartão</label>
                      <input
                        id="cardNumber"
                        type="text"
                        name="cardNumber"
                        value={form.values.cardNumber}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputError('cardNumber') ? 'error' : ''}
                      />
                    </InputGroup>
                    <InputGroup maxWidth="123px">
                      <label htmlFor="expiresMonth">Mês de Vencimento</label>
                      <input
                        id="expiresMonth"
                        type="text"
                        name="expiresMonth"
                        value={form.values.expiresMonth}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputError('expiresMonth') ? 'error' : ''
                        }
                      />
                    </InputGroup>
                    <InputGroup maxWidth="123px">
                      <label htmlFor="expiresYear">Ano de Vencimento</label>
                      <input
                        id="expiresYear"
                        type="text"
                        name="expiresYear"
                        value={form.values.expiresYear}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputError('expiresYear') ? 'error' : ''
                        }
                      />
                    </InputGroup>
                    <InputGroup maxWidth="48px">
                      <label htmlFor="cardCode">CVV</label>
                      <input
                        id="cardCode"
                        type="text"
                        name="cardCode"
                        value={form.values.cardCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputError('cardCode') ? 'error' : ''}
                      />
                    </InputGroup>
                  </Row>
                  <Row marginTop="24px">
                    <InputGroup maxWidth="150px">
                      <label htmlFor="installments">Parcelamento</label>
                      <select
                        id="installments"
                        name="installments"
                        value={form.values.installments}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputError('installments') ? 'error' : ''
                        }
                      >
                        {installments.map((installment) => (
                          <option key={installment.quantity}>
                            {installment.quantity}x de{' '}
                            {installment.formattedAmount}
                          </option>
                        ))}
                      </select>
                    </InputGroup>
                  </Row>
                </>
              ) : (
                <p>
                  Ao optar por essa forma de pagamento, é importante lembrar que
                  a confirmação pode levar até 3 dias úteis, devido aos prazos
                  estabelecidos pelas instituições financeiras. Portanto, a
                  liberação do código de ativação do jogo adquirido ocorrerá
                  somente após a aprovação do pagamento do boleto.
                </p>
              )}
            </>
          </Card>
          <Button
            type="button"
            title="Clique aqui para finalizar a compra"
            onClick={form.handleSubmit}
          >
            Finalizar compra
          </Button>
        </form>
      )}
    </div>
  )
}

export default Checkout
