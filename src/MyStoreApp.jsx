import {AppRouter} from "./router/AppRouter"
import {GlobalProvider} from "./contexts/global/GlobalProvider.jsx";
import {ArticlesProvider} from "./contexts/articles/ArticlesProvider.jsx";

export const MyStoreApp = () => {
  return (
    <>
      <GlobalProvider>
        <ArticlesProvider>
          <AppRouter/>
        </ArticlesProvider>
      </GlobalProvider>
    </>
  )
}
