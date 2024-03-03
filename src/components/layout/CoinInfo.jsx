import { Flex, Typography } from 'antd'
export default function CoinInfo({ coin, withSymbol }) {
  return (
    <Flex align="center">
      <img
        src={coin.icon}
        alt={coin.name}
        style={{ width: '40px' }}
      />
      <Typography.Title
        style={{ margin: '0', marginLeft: '10px' }}
        level={2}
      >
        {withSymbol && <span>({coin.symbol})</span>} {coin.name}
      </Typography.Title>
    </Flex>
  )
}
