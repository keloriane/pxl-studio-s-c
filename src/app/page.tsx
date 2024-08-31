"use client";
import Col from "@/components/common/Col";
import GridContainer from "@/components/common/Container";
import styles from "./page.module.css";
import AnimatedText from "@/components/common/AnimatedText/AnimatedText";

export default function Home() {
  return (
    <main>
      <GridContainer
        colCount={20}
        colGap={20}
        className={styles.gridContainer}
        rowGap={20}
      >
        <Col colStart={7} span={9}>
          <AnimatedText
            text="Template styled components PXL"
            splitType="word"
            as={"h1"}
            className={styles.titleWrapper}
          />
        </Col>
        <Col
          colStart={[1, 1, 1, 1]}
          span={[20, 20, 10, 10]}
          className={styles.leftContainer}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            tempore, beatae odit rem facilis explicabo expedita. Recusandae, non
            debitis. Neque eligendi eveniet molestias odit. Iure perferendis
            veritatis ipsa mollitia repellat!
          </p>
        </Col>
        <Col
          colStart={[1, 1, 11, 11]}
          span={[20, 20, 10, 10]}
          className={styles.rightContainer}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            tempore, beatae odit rem facilis explicabo expedita. Recusandae, non
            debitis. Neque eligendi eveniet molestias odit. Iure perferendis
            veritatis ipsa mollitia repellat!
          </p>
        </Col>
      </GridContainer>
    </main>
  );
}
