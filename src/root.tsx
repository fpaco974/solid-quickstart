// @refresh reload
import { Suspense } from "solid-js";
import {
  Body,
  Head,
  Html,
  Meta,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - Bare</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <iframe 
          src="https://gamma.app/embed/dx6ffp881ka6p3t" 
          style={{width: '100%', height: '100vh'}} 
          allow="fullscreen; display-capture" 
          title="le comparateur mariage">
        </iframe>
        <Scripts />
      </Body>
    </Html>
  );
}
