
import { Link } from 'react-router-dom';

const CartWidget = () => {
  
  return (
    <div style={{display: 'flex',width: 70, justifyContent: 'space-between', alignItems:'center'}}>
      <link to={CartWidget}>🛒</link>
      <span style={{fontWeight: 'bold', fontSize: '1.3rem',color: 'white'}}>1</span>

    </div>
  )
}

export default CartWidget;