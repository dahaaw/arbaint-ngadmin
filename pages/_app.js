import 'tailwindcss/tailwind.css';
import {Provider} from 'react-redux';
import store from 'redux/store';
import ProtectedRoute from 'routes/Protected';

function MyApp({ Component, pageProps, router }) {
  return <Provider store={store}>
    <ProtectedRoute store={store} router={router}>
      <Component {...pageProps} />
    </ProtectedRoute>
  </Provider> 
}

export default MyApp
