import './collapse.scss'

function ClickCollapse() {
  const depliants = document.querySelectorAll(".collapse")
  for(const depliant of depliants) {
      const depliantTitle = depliant.querySelector(".title")
      const depliantContent = depliant.querySelector(".content")
      const depliantArrow = depliant.querySelector(".arrow")

        depliantTitle.onclick = function() {
          if(depliantContent.style.visibility === "visible") {
              depliantContent.style = "visibility: hidden; height: 0; transform: translateY(-30px); transition: all 300ms linear;"
              depliantArrow.style = "transform:rotate(45deg);transition:300ms linear;"
              depliantTitle.style = "border-radius: 10px;"
          }
          else {
              depliantContent.style = "visibility: visible; height: auto; transform: translateY(0); transition: all 300ms linear;"
              depliantArrow.style = "top: 17px;transform:rotate(-135deg);transition:300ms linear;"
              depliantTitle.style = "border-radius: 10px 10px 0 0"
          }
        }
  }
}

function Collapse(props) {
  return (
    <div className="collapse">
      <div className="title" ref={ClickCollapse}>
        {props.children[0]}
        <span className="arrow"></span>
      </div>
      <div className="content">
        {props.children[1]}
      </div>
    </div>
  )
}

export default Collapse