import { useRouter } from "next/router";
import { useState } from "react";
import CustomerDetailsPage from "../../components/template/CustomerDetailsPage";
import fetchCustomerById from "../../utils/fetchCustomerById";

function Index() {
  const [data, setData] = useState(null);
  const router = useRouter();
  const {
    query: { customerId },
    isReady,
  } = router;

  fetchCustomerById(isReady, customerId, setData);

  if (data) return <CustomerDetailsPage data={data} />;
}

export default Index;
