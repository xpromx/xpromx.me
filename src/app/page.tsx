import React from "react";
import { Button, Icon, Layout, LogoName } from "@components";
import { GITHUB, LINKEDIN, TWITTER } from "../constants";
import Link from "next/link";
import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {};

export default function Home() {
  return (
    <Layout>
      <Layout.Main>
        <div className={styles.root}>
          <div className={styles.col}>
            <LogoName />
            <h2 className={styles.h2}>Web Developer</h2>
            <div className={styles.stack}>
              <Icon icon="nodeJS" color="nodejs" size="lg" />
              <Icon icon="react" color="react" size="lg" />
              <Icon icon="php" color="php" size="lg" />
              <img src="/argentina.png" />
              <img src="/japan.png" />
            </div>
            <Link href="/contact" passHref legacyBehavior>
              <Button className={styles.button}>{`Let's Chat`}</Button>
            </Link>
          </div>
          <div className={styles.col}>
            <div className={styles.profile}>
              <img src="/profile.png" className={styles.avatar} />
              <div className={styles.social}>
                <a href={GITHUB} target="_blank" rel="noreferrer">
                  <Icon icon="github" size="lg" />
                </a>

                <a href={TWITTER} target="_blank" rel="noreferrer">
                  <Icon icon="twitter" size="lg" />
                </a>

                <a href={LINKEDIN} target="_blank" rel="noreferrer">
                  <Icon icon="linkedin" size="lg" />
                </a>

                <Link href="/contact">
                  <Icon icon="email" size="lg" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout.Main>
    </Layout>
  );
}
