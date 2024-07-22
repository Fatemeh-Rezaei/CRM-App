import connectDB from "../utils/connectDB";
import Customer from "../models/Customer";
import HomePage from "../components/template/HomePage";

function Index({ customers }) {
  return <HomePage customers={customers} />;
}

export default Index;

export async function getServerSideProps() {
  try {
    await connectDB();
    const customer = await Customer.find();
    return {
      props: {
        customers: JSON.parse(JSON.stringify(customer)),
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
