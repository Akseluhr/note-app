import React from 'react';
import { useRouter } from 'next/router';

// Catch all params
// Can be used for a bunch of pages that have the same layout but need their own URL
// E.g. documentation
// Catch all catches all 'documentation stuff' and you can do anything with those params.
const Page = () => {

  const router = useRouter()

  // /notes/1/2/3/4 --> params
  const { params } = router.query
  console.log(params)
  return (
    <h1>
      Note 
    </h1>
  )
}

export default Page