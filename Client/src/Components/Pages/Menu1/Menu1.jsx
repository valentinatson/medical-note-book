import style from "./Menu1.module.css"
import profil from "../../../Assets/wis.jpg"

const Menu1 = () => {
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
                <button  className={style.bnt__demandeConsultation}>Demande de consultation</button>

                <div className={style.div1}>
                    <span className={style.info}>Informations Personnelles</span>
                    <div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti non eius quibusdam unde error voluptatibus dolorum enim delectus aut, beatae blanditiis id nihil minima quam deserunt modi nostrum explicabo odio.
                            Voluptate dolore laborum magni provident exercitationem rerum asperiores sit id modi saepe ea sequi esse temporibus architecto, quas quo, facilis iste eos perspiciatis. Facilis sunt, libero repellat voluptate laboriosam error?
                            Accusantium placeat consectetur magnam labore, cum officiis architecto porro recusandae in, accusamus quibusdam. Quos, nemo aliquam consequuntur perferendis vel nulla reprehenderit ipsam vero ex, quas veritatis aliquid quia, qui minus.
                            Vel magni quia, rerum quod quaerat impedit pariatur architecto. Unde quam reiciendis rem ducimus, animi assumenda, nulla labore necessitatibus consequuntur iste quod veniam quibusdam beatae debitis similique. Atque, error a?
                            Recusandae nostrum fuga sint adipisci? Doloremque architecto corporis culpa fuga dolore, earum nesciunt facilis hic, accusantium magnam laborum fugiat in, sed voluptates at impedit dignissimos perspiciatis mollitia amet nemo ratione.
                        </p>

                        <button  className={style.btn__modifier}>Modifier</button>
                    </div>
                </div>



                <div className={style.div2}>
                    <span className={style.carnet}>Carnet</span>
                    <div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti non eius quibusdam unde error voluptatibus dolorum enim delectus aut, beatae blanditiis id nihil minima quam deserunt modi nostrum explicabo odio.
                            Voluptate dolore laborum magni provident exercitationem rerum asperiores sit id modi saepe ea sequi esse temporibus architecto, quas quo, facilis iste eos perspiciatis. Facilis sunt, libero repellat voluptate laboriosam error?
                            Accusantium placeat consectetur magnam labore, cum officiis architecto porro recusandae in, accusamus quibusdam. Quos, nemo aliquam consequuntur perferendis vel nulla reprehenderit ipsam vero ex, quas veritatis aliquid quia, qui minus.
                            Vel magni quia, rerum quod quaerat impedit pariatur architecto. Unde quam reiciendis rem ducimus, animi assumenda, nulla labore necessitatibus consequuntur iste quod veniam quibusdam beatae debitis similique. Atque, error a?
                            Recusandae nostrum fuga sint adipisci? Doloremque architecto corporis culpa fuga dolore, earum nesciunt facilis hic, accusantium magnam laborum fugiat in, sed voluptates at impedit dignissimos perspiciatis mollitia amet nemo ratione.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Menu1