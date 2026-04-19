import type { OrderAgainItemData } from '@/src/types/orderAgain';

/** Figma MCP `get_design_context` for node 70121:70105 / 70121:70450 */
const ORDER_THUMB = { uri: 'http://localhost:3845/assets/24dfe6db9e8c3028e88cb3f3ca6c1afe5fa902dd.png' };

/** Mock past orders — replace with API data; imagery matches attached design. */
export const orderAgainItems: OrderAgainItemData[] = [
  { id: '70121-70444', line1: 'Burger', line2: 'Town', image: ORDER_THUMB },
  { id: '70121-70450', line1: 'Burger', line2: 'Town', image: ORDER_THUMB },
  { id: '70121-70456', line1: 'Pizza', line2: 'Central', image: ORDER_THUMB },
  { id: '70121-70462', line1: 'Sushi', line2: 'Harbour', image: ORDER_THUMB },
  { id: '70121-70468', line1: 'Tacos', line2: 'Market', image: ORDER_THUMB },
];
