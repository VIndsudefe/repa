import classes from './css/trening.module.css'
import data from './data/data.json';
import { useState } from 'react';

const Trening = () => {
  const [show , setShow] = useState(null);

  return (
    <div>
      <div className={classes.line}>
      
        <div className={classes.wrapper}>
          <hr className={classes.horizontalLine} />
          {data.map((item, index) => (
            <>
                <div className={classes.card} key={index}>
                  <div className={classes.trening_star}></div>
                  <div className={Text}>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <button className={classes.start}>Начать</button>
                  </div>
                </div>
              {(index + 1) % 6 === 0 && index !== data.length - 1 && (
                <div className={classes.horizontalLine}>
                  <div  className={show? classes.hiden: "" } >

                    </div>
                  </div>
              )}
            </>
          ))}
          <hr className={classes.horizontalLine} />
        </div>
        
      </div>
    </div>
  );
};

export default Trening