import { useState } from 'react'

import { InputGroup, Row, TabButton } from './styles'

import Button from '../../components/Button'
import Card from '../../components/Card'

import barcode from '../../assets/images/barcode.png'
import creditCard from '../../assets/images/credit-card.png'

const Checkout = () => {
  const [payWithCard, setPayWithcard] = useState(false)

  return (
    <div className="globalContainer">
      <Card title="Dados de cobrança">
        <>
          <Row>
            <InputGroup>
              <label htmlFor="fullname">Nome Completo</label>
              <input id="fullname" type="text" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="email">E-mail</label>
              <input id="email" type="email" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="cpf">CPF</label>
              <input id="cpf" type="text" />
            </InputGroup>
          </Row>
          <h3>Dados de entrega - conteúdo digital</h3>
          <Row>
            <InputGroup>
              <label htmlFor="deliveryEmail">E-mail</label>
              <input id="deliveryEmail" type="email" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="confirmDeliveryEmail">Confirme o e-mail</label>
              <input id="confirmDeliveryEmail" type="email" />
            </InputGroup>
          </Row>
        </>
      </Card>
      <Card title="Pagamento">
        <>
          <TabButton
            isActive={!payWithCard}
            onClick={() => setPayWithcard(false)}
            title="Clique para pagar via Boleto Bancário"
          >
            <img src={barcode} alt="Boleto" />
            Boleto Bancário
          </TabButton>
          <TabButton
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
                  <label htmlFor="cardOwner">Nome do Titular do Cartão</label>
                  <input id="cardOwner" type="text" />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="cpfCardOwner">CPF do Titular do Cartão</label>
                  <input id="cpfCardOwner" type="text" />
                </InputGroup>
              </Row>
              <Row marginTop="24px">
                <InputGroup>
                  <label htmlFor="cardDisplayName">Nome no Cartão</label>
                  <input id="cardDisplayName" type="text" />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="cardNumber">Número do Cartão</label>
                  <input id="cardNumber" type="text" />
                </InputGroup>
                <InputGroup maxWidth="123px">
                  <label htmlFor="expiresMonth">Mês de Vencimento</label>
                  <input id="expiresMonth" type="text" />
                </InputGroup>
                <InputGroup maxWidth="123px">
                  <label htmlFor="expiresYear">Ano de Vencimento</label>
                  <input id="expiresYear" type="text" />
                </InputGroup>
                <InputGroup maxWidth="48px">
                  <label htmlFor="cardCode">CVV</label>
                  <input id="cardCode" type="text" />
                </InputGroup>
              </Row>
              <Row marginTop="24px">
                <InputGroup maxWidth="150px">
                  <label htmlFor="installments">Parcelamento</label>
                  <select>
                    <option>1x de R$ 200,00</option>
                    <option>2x de R$ 200,00</option>
                    <option>3x de R$ 200,00</option>
                  </select>
                </InputGroup>
              </Row>
            </>
          ) : (
            <p>
              Ao optar por essa forma de pagamento, é importante lembrar que a
              confirmação pode levar até 3 dias úteis, devido aos prazos
              estabelecidos pelas instituições financeiras. Portanto, a
              liberação do código de ativação do jogo adquirido ocorrerá somente
              após a aprovação do pagamento do boleto.
            </p>
          )}
        </>
      </Card>
      <Button type="button" title="Clique aqui para finalizar a compra">
        Finalizar compra
      </Button>
    </div>
  )
}

export default Checkout
