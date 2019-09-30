import firestore from '@react-native-firebase/firestore';

export const fetchCustomers = async ({ text, storeId }) => {
  text = text.toLowerCase();
  const customers = [];

  try {
    let query = firestore()
      .collection('stores')
      .doc(storeId)
      .collection('customers');

    if (text) {
      const end = text.replace(/.$/, c =>
        String.fromCharCode(c.charCodeAt(0) + 1),
      );

      query = query.where('name', '>=', text).where('name', '<', end);
    }

    const result = await query.orderBy('name').get();

    await Promise.all(
      await result.docs.map(async item => {
        const customer = item.data();
        customer.id = item.id;

        customers.push(customer);
      }),
    );

    return customers;
  } catch (e) {}
};
