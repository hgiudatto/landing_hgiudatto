import Banner from "./components/Banner";
import Explanation from "./components/Explanation";
import Presentation from "./components/Presentation";
import StickyFooter from "./components/StickyFooter";
import Layout from "./components/Layout";
import {ThemeProvider, createMuiTheme} from "@material-ui/core";


function App() {
  const theme = createMuiTheme({
    breakpoints: {
      values: {
        xxs: 320,
        xs: 480,
        sn: 640,
        md: 768,
        lg: 1024,
        xl: 1220,
        xxl: 1366,
        xxxl: 1620,
      }
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Banner/>
        <Explanation/>
        <Presentation/>
        {/* <StickyFooter/> */}
      </Layout>
    </ThemeProvider>
  );
}

export default App;
