import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="blog">
      <Header title="Passage Inspired by Eckhart Tolle’s book The Power of Now"
      />
      <Content 
        bodyTitle="The Essence of Being"
        bodyText="The present moment is all we ever have. It is the only point of access to the deeper, more profound levels of our being. By embracing the now, we free ourselves from the chains of the past and the anxieties of the future. This is where true peace resides. As we let go of our constant mental chatter and distractions, we uncover a state of stillness and presence that connects us to our deeper self. In this space of presence, we experience a profound sense of connection and inner peace that transcends the fluctuations of external circumstances."
      />
      <Content 
        bodyTitle="Embracing the Now"
        bodyText="In every moment, there is a doorway to inner peace and stillness. The mind often drifts into the past or future, but true contentment is found in the present. By anchoring ourselves in the now, we align with the essence of our being, which is timeless and unchanging. This presence allows us to experience life fully and deeply, free from the constraints of time and mental distractions. The more we dwell in the present, the more we connect with a sense of calm and clarity that guides us beyond the superficial layers of existence."
      />
      <Content 
        bodyTitle="The Essence of Inner Peace"
        bodyText="The moment you accept what troubles you’ve been given, the door will open to a new way of being. This is the essence of inner peace: the surrender to the present moment without resistance. By letting go of your mental constructs, you allow yourself to experience the depth of the now, a space where you can find stillness and connection to your true self."
      />
      <Footer 
        copyRight="&#169;2024 Inspired by Eckhart Tolle Blog"/>
    </div>
  );
}

export default App;