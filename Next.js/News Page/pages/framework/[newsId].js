import {useRouter}  from 'next/router';

//our-dpmaon.com/framework/something-imp

function ReactPage() {
const router=useRouter();

const reactId=router.query.reactId;

  return (
   <div>
   <h1> The React Page </h1>
   </div>
  )
}

export default ReactPage;