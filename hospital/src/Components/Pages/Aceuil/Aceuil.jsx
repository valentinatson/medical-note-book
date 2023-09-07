import style from "./Aceuil.module.css"
import logo from "../../../Assets/wis.jpg"
import { NavLink } from "react-router-dom"
const Aceuil = () => {
    return(
        <div className={style.body}>
            <div className={style.logo}>
                <span>
                    <img src={logo} style={({width:"150px"},{height:"90px"},{borderRadius:"150px"})} alt="" />
                </span>
                <span className={style.logo__nomApp}>SeeDoctor</span>
            </div>
            <div className={style.milieu__descriptionApp}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam assumenda quis, nemo vero odio quisquam rem ad ipsum. Odio facere suscipit voluptatibus ea quisquam hic. Unde iure voluptatum obcaecati. Sequi enim repellat consequatur dolorem suscipit sint! At aperiam iste quae provident, vel nobis, porro architecto non, officiis sunt unde recusandae. Inventore nobis delectus explicabo placeat temporibus ipsum maxime autem minus deleniti porro beatae cum, necessitatibus doloribus. Fugiat suscipit voluptatem dolore repudiandae tempore explicabo! Necessitatibus quisquam, autem obcaecati illo aspernatur, fuga inventore optio numquam sunt accusamus facere esse enim tenetur ex, soluta voluptatum fugiat vitae possimus maiores ullam! Assumenda eaque doloremque aspernatur recusandae dolores expedita, rem repellendus harum ab ullam magnam, earum unde asperiores quis architecto dolorem error voluptas veritatis.
                </p>
            </div>
            <div className={style.auth}>
                <div>
                    <button className={style.auth__signup}>
                        <NavLink to={"/Signup"}>Inscription</NavLink>
                    </button>
                </div>
                <div>
                    <button className={style.auth__login}>
                    <NavLink to={"/Login"}>Connexion</NavLink>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Aceuil