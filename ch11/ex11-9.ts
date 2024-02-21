// 11.4.1 와일드카드 모듈 선언

// styles.d.ts
declare module "*.module.css" {
    const styles: { [i: string]: string };
    export default styles;
}



// component.ts
import styles from "./styles.module.css";

styles.anyClassName; // 타입: string
