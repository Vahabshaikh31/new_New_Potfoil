import './Experience.css'

const Experi = (props) => {
  return (<>
    <div className="experience">
      <div className="notification1">
        <div className="notititle">{props.Title}</div>
           <div className="notiTime">{props.Time}</div>
        <div className="notibody">{props.Descr}</div>
     
      </div>
    </div> 
    </>
  )
}

export default Experi
