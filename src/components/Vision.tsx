import { css } from '@kuma-ui/core'
import { FadeInMotion } from './motion/FadeInMotion'
import {
  SectionTitleCotainer,
  SectionTitle,
  SectionSubTitle,
  ContentTitle,
  ContentText,
  target,
} from '@/style/section'

export const Vision = () => {
  return (
    <section className={Diaglonal}>
      <div className={target} id='Vision'></div>
      <FadeInMotion className={visionInner}>
        <div className={SectionTitleCotainer}>
          <p className={SectionTitle}>AleX Spirits</p>
          <p className={SectionSubTitle}>コア・バリュー</p>
        </div>
        <p className={ContentTitle}>1. 信頼される組織になる。</p>
        <p className={ContentText}>
          私たちは、常に倫理観のある行動を心がけ、サービスの誠実さを通じてステークホルダーとの信頼を築きます。私たちは、透明性、深い傾聴、そしてコミットメントの実現に専心します。そのために、私たちは<strong>特に「情報を広く、オープンかつ丁寧に共有すること」と「率直かつ直接的なコミュニケーションを行うこと」を徹底して意識します。</strong>
        </p>
        <p className={ContentTitle}>2. ユーザーに「夢」と「希望」を与えるんだ。</p>
        <p className={ContentText}>
          私たちは、ユーザーが夢を見つけ、その夢を実現するためのサポートを全力でします。また、その過程においてたとえどんな困難があったとしてもユーザーの夢を実現するためにその困難を乗り越えます。<strong>そのために、私たちは止まることなく、常に意味のある挑戦し続け、すべての挑戦に対して徹底的にフィードバックを行います。</strong>
        </p>
        <p className={ContentTitle}>3. 世界に衝撃を与えるような至高の作品で戦っていくんだ。</p>
        <p className={ContentText}>
          私たちは、常に世界をより良くするために活動しています。だからこそ、中途半端な商品を作るのではなく、世界のすべての人が衝撃を受けるような至高の作品としてのサービスを作り続けることで世界に良い影響を与えていきます。
        </p>
        <p className={ContentTitle}>4. すべての人に「公平（Equity）」と「自由（Liberty）」を。</p>
        <p className={ContentText}>
          私たちは力を合わせれば、より大きな力を発揮できると信じています。また、個々人が責任を持って能動的に活動することによって、より良いサービスが作れると確信しています。<strong>だからこそ、私たちは「障がい者」「女性」「マイノリティ」などのカテゴリーではなく、一人一人の人間としてすべてのステイクホルダーを尊重することを大切にします。また、それぞれの「強み」を理解し、互いに助け合えるような関係を築いていきます。</strong>
        </p>
        <p className={ContentTitle}>5. より深く、そしてより柔軟に考える。</p>
        <p className={ContentText}>
        私たちは、地球上で最も「夢」に対して前向きな企業であり続けるために、不可能と思われることだとしても可能にする努力をする必要があります。そのため、ステレオタイプ（固定観念）や常識に囚われることなく、より深く、そしてより柔軟に物事について考えることを徹底します。
        </p>
      </FadeInMotion>
    </section>
  )
}

const Diaglonal = css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150vh;
  margin-top: 70px;
  background: #fff;
  transform: skewY(2deg);
  @media (max-width: xl) {
    height: 80vh;
  }
  @media (max-width: md) {
    height: auto;
  }
`

const visionInner = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;
  padding: 80px 50px;
  color: #000;
  text-align: left;
  @media (max-width: xl) {
    height: auto;
    width: 90%;
    padding: 10vh 0;
  }
  & > * {
    transform: skewY(-2deg);
  }
`

const Catch = css`
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 50px;
  @media (max-width: xl) {
    font-size: 1.2rem;
  }
  @media (max-width: md) {
    font-size: 1rem;
  }
  @media (max-width: sm) {
    font-size: 0.8rem;
  }
`