import Articles from "./Articles/page";
import Collection from "./Collections/page";
import Main from "./Main/page";
import Product from "./Product/page";
import Sale from "./Sale/page";
import Value from "./Value/page";
import Welcome from "./Welcome/page";
export default function Home() {
  return (
 <>
 <Main/>
 <Welcome/>
 <Value/>
 <Product/>
 <Collection/>
 <Sale/>
 <Articles/>
 </>
  );
}
