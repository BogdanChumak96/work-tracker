import Widget from "../widgets/example";
import { foo } from "./foo";

console.log(foo);
const ExampleShared = () => (
    <div><Widget /></div>
);

export default ExampleShared;