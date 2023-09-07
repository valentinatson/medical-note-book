import style from "./Menu2.module.css"
import profil from "../../../Assets/wis.jpg"

const Menu2 = () => {
    return(
        <div>
            <header>
                <article className={style.profil}>
                    <span>
                    <img src={profil} style={({width:"130px"},{height:"70px"})} alt="profil" />
                    </span>
                    <span className={style.profil__nom}>nom__prenom</span>
                </article>
                <article className={style.article__logo}>
                    <span className={style.logo}>logo</span>
                </article>
            </header>

            <div>
                <button  className={style.bnt__Information}>Voire Informations Compte</button>

            <div  className={style.list_hopital}>
                <section className={style.hopital1}></section>
                <section className={style.hopital2}></section>
                <section className={style.hopital3}></section>
                <section className={style.hopital4}></section>
                <section className={style.hopital5}></section>
            </div>



                
            </div>
        </div>
    )
}
export default Menu2