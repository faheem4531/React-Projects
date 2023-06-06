import { Fragment } from "react";
import Link from 'next/link';

function NewsPage() {
  return (
   <Fragment>
   <h1>The FrameWork Page </h1>
   <ul>
    <li><Link href="/framework/react-frame"> React js</Link></li>
    <li><Link href="/framework/nextDetail">Nest js</Link> </li>
    </ul> 
   </Fragment>
  )
};

export default NewsPage;