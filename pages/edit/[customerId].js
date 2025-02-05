import { useState } from "react";
import { useRouter } from "next/router";
import CustomerEditPage from "../../components/template/CustomerEditPage";
import fetchCustomerById from "../../utils/fetchCustomerById";

function Index() {
  const [data, setData] = useState(null);
  const router = useRouter();
  const {
    query: { customerId },
    isReady,
  } = router;

  fetchCustomerById(isReady, customerId, setData);

  if (data) return <CustomerEditPage data={data} id={customerId} />;
}

export default Index;
