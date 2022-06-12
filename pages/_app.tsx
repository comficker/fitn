import '../styles/globals.css';
import App, { AppInitialProps, AppContext } from "next/app";
import {wrapper} from '../components/store';
import axios from 'axios';

class WrappedApp extends App<AppInitialProps> {
  public static getInitialProps = async ({ Component, ctx }: AppContext) => {
    // Keep in mind that this will be called twice on server, one for page and second for error page
    ctx.store?.dispatch({ type: "APP", payload: "_app" });
    return {
      pageProps: {
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}),
        //xstore
      }
    };
  };  
  public render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default wrapper.withRedux(WrappedApp);
