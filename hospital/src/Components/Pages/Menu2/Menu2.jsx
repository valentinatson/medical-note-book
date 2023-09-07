import style from "./Menu2.module.css"
import profil from "../../../Assets/wis.jpg"

const Menu2 = () => {
    return(
    <div>
        <header>
            
            <article className={style.article__logo}>
                <span className={style.logo}>logo hopital</span>
            </article>
            <article className={style.profil}>
                <span className={style.profil__nom}>nom__hopital</span>
            </article>
            <article>
                <button className={style.btn__gerer__docteur}>Gerer docteur</button>
                <button className={style.btn__liste__demande}>Liste des demandes</button>
            </article>
        </header>

        <div>
            <h3>
                Bienvenue Docteur, Veillez sélectionnez votre compte et vous authentifiez avant d'utiliser l'application.
            </h3>

        <div  className={style.list_hopital}>
            <select name="" id="">
                <option value="">Liste des docteurs</option>
                <option value="1">Docteur WATSON</option>
                <option value="2">Docteur TYLER</option>
            </select>
        </div>



            
        </div>
    </div>
)
}
export default Menu2