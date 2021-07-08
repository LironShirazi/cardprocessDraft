import styles from './ProcessCardComponent.module.css'
import Image from 'next/image';



export default function ProcessCardComponent({ mode, coverPic, title, daysInQueue, prevStationsPics}) {
  console.log('cover!@!@@#$#@%#$%$#%#$%' + coverPic);
  return (
    <div className={styles.cardContainer}>
      <div className={styles.coverPicture}>
      <Image src="/1.jpg" alt="cover" width={100} height={70} />
      {/* // <Image src={coverPic} layout="fill"/> */}
      </div>
      <h2 className={styles.title}>{title}</h2>
      <div><span>{daysInQueue} Days In Queue</span></div>
      <hr className={styles.solidHr}/>
      <div className={styles.previousStations}>
        <h3>PREVIOUS STATIONS</h3>
        <div className={styles.stationsPics}>
          {/* <img></img> */}
        </div>
      </div>
    </div>
  );
}