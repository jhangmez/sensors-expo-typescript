This is a [Expo](https://expo.dev/) project by [@jhangmez](https://www.linkedin.com/in/jhangmez/)

## Getting Started

First, run the development server:

```bash
npx expo start
```

```
import { useAccelerometer, useGyroscope,useBarometer  } from '../hooks/useSensors';

const AccelerometerScreen = () => {
 const { data, _slow, _fast } = useAccelerometer();
 // Rest of the code...
};

const BarometerScreen = () => {
 const { data, _unsubscribe } = useBarometer();
// Rest of the code...
};

const GyroscopeScreen = () => {
 const { data, _slow, _fast } = useGyroscope();
 // Rest of the code...
};

const LightSensorScreen = () => {
 const { illuminance, _unsubscribe } = useLightSensor();
 // Resto del código...
};

const MagnetometerScreen = () => {
 const { data, _slow, _fast, _unsubscribe } = useMagnetometer();
 // Resto del código...
};

const PedometerScreen = () => {
 const { stepCount, _unsubscribe } = usePedometer();
 // Resto del código...
};
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
