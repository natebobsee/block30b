import { reserve } from "./api";
import { useState } from "react";
export default function Reserve() {
    const [checkout, setCheckout]=useState();
    // reserve(checkout);
    console.log(checkout);

    function intcheck()
{
    reserve(checkout)
}
return(
<>

<form onSubmit={intcheck}>
 <div>
  <label>
    reserve ID <input className='submit' value={checkout} onChange={(e) => setCheckout(e.target.value)} />
  </label>
  </div>
<button type='submit'>reserve</button>
</form>
</>
)

}