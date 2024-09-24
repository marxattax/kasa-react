import './collapse.scss'
import { useState } from 'react'


function Collapse(props) {

  const [open, setOpen] = useState(false);
  const styles = open ? {
    content: { 
      visibility: "visible",
      height: "auto",
      transform: "translateY(0)",
      transition: "300ms linear"
    },
    arrow: {
      top: "17px",
      transform: "rotate(-135deg",
      transition: "300ms linear"
    },
    title: {
      borderRadius: "10px 10px 0 0",
      transition: "300ms linear"
    }
  } : {} ;

  const openCollapse = () =>
    (open == false ? setOpen(true) : setOpen(false))

  return (
    <div className="collapse">
      <div className="title" style={styles.title} onClick={openCollapse}>
        {props.children[0]}
        <span className="arrow" style={styles.arrow}></span>
      </div>
      <div className="content" style={styles.content}>
        {props.children[1]}
      </div>
    </div>
  )
}

export default Collapse