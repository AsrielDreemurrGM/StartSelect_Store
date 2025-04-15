export const convertToBRL = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export const getTotalPrice = (items: Game[]) => {
  return items.reduce((acumulator, currentValue) => {
    if (!currentValue.prices.current) return 0
    return (acumulator += currentValue.prices.current)
  }, 0)
}
