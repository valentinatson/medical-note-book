import style from "./Menu1.module.css"

const Menu1 = () => {
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
                <h1 className={style.liste__hopital}>Liste des hopitaux</h1>

            <div  className={style.list_hopital}>
                <section className={style.hopital1}>
                    <button>accepter</button>
                </section>
                <section className={style.hopital2}>
                    <button>accepter</button>
                </section>
                <section className={style.hopital3}>
                    <button>accepter</button>
                </section>
                <section className={style.hopital4}>
                    <button>accepter</button>
                </section>
                <section className={style.hopital5}>
                    <button>accepter</button>
                </section>
            </div>



                
            </div>
        </div>
    )
}
export default Menu1