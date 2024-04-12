export default function HeroSection(){
    return(
            <section id="HeroSection" className="hero--section">
                <div className="hero--section--content--box">
                    <div className="hero-section--content">
                        <p className="section--title"> Hi, I m Chenou</p>
                        <h1 className="hero--section--title">
                            <span className="hero-section-title--color">Full Stack </span>{""}
                            <br/>
                            Developer
                            <hr/>
                        </h1>
                        <p className="hero--section--description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, beatae tempore. Atque, numquam accusamus magnam sit ratione dolor. Quis omnis autem commodi unde earum animi vitae ex voluptatum, laudantium repellendus!
                            <br />
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde est consequatur illum at praesentium ut, hic voluptas laudantium fugit. Ullam dolorem quasi ad odio deleniti aliquid, ipsum mollitia vel beatae!
                        </p>
                    </div>
                    <button className="btn btn-primary">Get in touch</button>
                </div>
                <div className="hero-section-img">
                    <img src="./img/logo.png" alt="Hero section"/>
                </div>
            </section>
    )
}