import React, {useState} from 'react'
import './About.css'

const About = () => {
  const [text, setText] = useState('Read more')
  const [click, setClick] = useState(false)
  const showText =()=>{setClick(!click)}

const changeText = ()=>{
  {click? setText('Read More'): setText('Read Less')}
}
  const [read, setRead] = useState('Read More')
  const [press, setPress] = useState(false)
  const showList =()=>{setPress(!press)}
  const textChange =()=>{
    {press? setRead('Read More'): setRead('Read Less')}
  }

  return (
    <>
      <section id='leaders' className='about'>
        <div className='aboutus'>
        <h1>About Us</h1>
        <p>With experience spanning multiple industries, business types and functions, we know what it takes to achieve results in large established companies, both public and private, and to build from the ground up in smaller businesses. </p>
        <div className='about-row'>
          <div className='about-column'>
            <img src='./static/anita.jpg'></img>
            <h2>About Anita Fleming</h2>
            <h3>Founder and Director</h3>
            <p>Anita is a commercially-focused leader specialising in people, strategy and transformation. Having held executive roles at ANZ, Rio Tinto, Kinrise and Hay Group, over the past 20 years, she has built deep experience in linking purpose and strategy, aligning and developing leaders, and coaching executives to translate business ambition into reality.  </p>
            <div onClick={showText}><p className='readmore' onClick={changeText}>{text}</p>
            <hr></hr></div>
            <div className={click? 'show-more':'show-less'}>
              <p>Anita's areas of strength and passion stem from her experiences in business and include:<br></br><br></br>

              Business transformation: As Executive Manager Group Strategy at ANZ Banking Group, Anita led one of the CEO’s four medium-term strategic goals to drive a purpose and values-led transformation of the bank. She engaged with leaders and the wider business to define ANZ’s purpose and integrate this with business strategy, banking products and services, values, governance and decision-making forums at Board and Management level.<br></br><br></br>

              Organisational effectiveness: As General Manager People and Culture at Kinrise, Anita worked closely with the CEO to integrate several independent Australian food manufacturing businesses to form Kinrise. This included establishing the executive team, defining the business purpose and strategy, operating model and transformation priorities, and flexing between growth and cost agendas.<br></br><br></br>

              Leadership and talent: At Rio Tinto, ANZ and Hay Group, Anita has set the direction and scope for the leadership and talent agenda, thinking innovatively about solutions grounded in business context. For example, she led the design and delivery of an immersive program in China to build complex problem-solving skills for executive talent at ANZ that resulted in strategic work streams. She has also led initiatives on talent and succession planning for the top team.<br></br><br></br>

              Anita is an associate of the Melbourne Business School and Duke Corporate Education. She is a Vincent Fairfax Fellow, selected to participate in the national ethical leadership program. She has also completed an executive program with MIT Sloan on digitisation and industrialisation. She holds a Bachelor’s degree in Science (Psychology) and a Masters in Organisational Psychology both from the University of New South Wales.</p>
              <div className='email'>
                <p>a.fleming@fourfoldconsulting.com.au</p>
                <p >LinkedIn profile</p>
              </div>
            </div>
          </div>
          <div className='about-column'>
            <img src='./static/kite.jpg'></img>
            <h2>About Fourfold Values</h2>
            <h3>What we care about</h3>
            <p>We are inspired by the potential for thoughtful businesses led by courageous leaders to improve the lives of those working for and around them. In helping leaders act with clarity and conviction to build sustainable businesses, we hope to play a part in building a better future. In partnering with our clients, we bring our four values to life.</p>
            <div onClick={showList}><p className='readmore' onClick={textChange}>{read}</p>
            <hr></hr></div>

            
            <div className={press? 'hide-list':'show-list'}>
              <ul >
                <li>Curious. We listen intently, and with an eye for patterns and context, help you frame the issue and solution</li>
                <li>Wholehearted. We work with determination and bring our experience and network to help you and your business achieve results</li>
                <li>Resourceful. We draw on collective smarts and available resources to find a path forward – balancing boldness with reality, efficiency with impact</li>
                <li>Critical friends. With respect and good intent, we don’t shy away from hard truths – we work alongside you so that you can do remarkable things</li>
              </ul>
            </div>
          </div>

        </div>

        </div>
      </section>
    </>
  )
}

export default About