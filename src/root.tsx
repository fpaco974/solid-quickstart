// @refresh reload
import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
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
        <Suspense>
          <ErrorBoundary>
            <A href="/">Index</A>
            <A href="/about">About</A>
            <Routes>
              <FileRoutes />
            </Routes>
            
            <iframe 
              src="https://gamma.app/embed/dx6ffp881ka6p3t" 
              style={{width: '700px', maxWidth: '100%', height: '450px'}} 
              allow="fullscreen" 
              title="le comparateur mariage">
            </iframe>
            
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
