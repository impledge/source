import stockPhoto from '../public/stockPhoto.jpeg';
import stockPhotoTwo from '../public/stockPhotoTwo.jpeg';
import stockPhotoThree from '../public/stockPhotoThree.jpeg';
import stockPhotoFour from '../public/stockPhotoFour.jpeg';
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Modal() {
  return (
    <div>
      <div className=" mx-auto sm:ml-20 py-2 px-4 grid items-center grid-cols-1 gap-y-2 gap-x-8 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Forward
          </h2>
          <p className="mt-4 text-black">
            Our way forward is through solving workflow inadequacies by leveraging technology!
          </p>
        </div>
        <div className={styles.img_grid}>
          <Image
            src={stockPhoto}
            alt="Photo of happy coworkers"
            className={styles.img_holders}
          />
          <Image
            src={stockPhotoThree}
            alt="Office environment with coworkers"
            className={styles.img_holders}
          />
          <Image
            src={stockPhotoTwo}
            alt="Happy conversation"
            className={styles.img_holders}
          />
          <Image
            src={stockPhotoFour}
            alt="Random photo"
            className={styles.img_holders}
          />
        </div>
      </div>
    </div>
  );
}
