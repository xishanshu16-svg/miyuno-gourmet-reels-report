import Image from "next/image";
import {
  ArrowDown, ArrowUpRight, BarChart3, Camera, Check, Eye, Heart,
  ChevronDown, MessageCircle, Play, ScanSearch, Sparkles, Target, TrendingUp, WandSparkles, ShieldCheck,
} from "lucide-react";
import { formulas, patternCards, reels, reportMeta } from "@/lib/uta-report";
import { deepInstructions } from "@/lib/uta-deep";

const compact = new Intl.NumberFormat("ja-JP", { notation: "compact", maximumFractionDigits: 1 });
const regular = new Intl.NumberFormat("ja-JP");
const percent = (value: number, base: number) => `${((value / base) * 100).toFixed(2)}%`;
const durationLabel = (duration: number) => duration > 0 ? `${duration.toFixed(1)}秒` : "公開尺：非表示";

export default function MiyunoReport() {
  return (
    <main>
      <header className="topbar wrap">
        <a className="logo" href="#top"><span>青</span><b>青森<br />リール戦略</b></a>
        <div className="topbar-meta"><span>地域インフルエンサー向け 投稿分析</span><b>{reportMeta.measuredAt} 公開データ</b></div>
      </header>

      <section className="hero" id="top">
        <div className="wave wave-top" />
        <div className="wave wave-bottom" />
        <div className="hero-grid wrap">
          <div className="hero-emblem" aria-hidden="true">
            <div className="crest-ring"><span>青</span><i /></div>
            <p>AOMORI REELS<br />STRATEGY</p>
          </div>
          <div className="hero-copy">
            <p className="eyebrow">地域インフルエンサー向け　リール成長分析</p>
            <h1><span>青森</span><em>リール戦略</em></h1>
            <div className="katana-line"><i /></div>
            <p className="lead">みゆのぐるめ｜青森グルメ・おでかけ　直近二ヶ月・対象十九投稿から再生数上位十投稿<br />実際の映像・表紙・公開指標を照合し、勝因・反証・改善台本まで一投稿ずつ読み解く。</p>
            <div className="hero-actions">
              <a className="primary-btn" href="#ranking">上位十投稿を見る <ArrowDown size={16} /></a>
              <a className="text-btn" href="https://www.instagram.com/miyuno_gourmet/" target="_blank" rel="noreferrer"><Camera size={15} /> @miyuno_gourmet <ArrowUpRight size={14} /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="metrics wrap" aria-label="分析サマリー">
        <article><span>ACCOUNT</span><strong>{compact.format(reportMeta.followers)}</strong><small>フォロワー（公開丸め値）</small></article>
        <article><span>TOP 10 AVG.</span><strong>{compact.format(reportMeta.averageViews)}</strong><small>平均再生</small></article>
        <article><span>MEDIAN</span><strong>{compact.format(reportMeta.medianViews)}</strong><small>中央値</small></article>
        <article><span>REACTIONS</span><strong>{regular.format(reportMeta.totalLikes)}</strong><small>合計いいね</small></article>
        <article><span>COMMENTS</span><strong>{regular.format(reportMeta.totalComments)}</strong><small>合計コメント</small></article>
      </section>

      <section className="insight-band">
        <div className="wrap insight-grid">
          <div><span className="section-kicker">総評｜伸びの兵法</span><h2>いま行く理由を一言、<br />工程の動きで証明する。</h2></div>
          <div className="insight-points">
            <p><b>01</b><span><strong>首位3本は「更新理由」＋動く実物証明</strong>南部鉄器で焼く餃子、予約不要になる巨大シュー、半額スコーン。21.0万・15.0万・14.1万再生で、期間中央値の2.66〜3.96倍に達した。</span></p>
            <p><b>02</b><span><strong>期限・時間・比較が行動を決める</strong>お盆だけ予約不要、18時から、若鳥と親鳥。単なるおすすめではなく、いつ行くか・何を選ぶかまで一文で決められる投稿が強い。</span></p>
            <p><b>03</b><span><strong>次の伸びしろは0秒と一投稿一判断</strong>首位でも外観と挨拶から始まり、長尺投稿は商品数が多い。最強の焼き・炙り・断面を先頭へ移し、残りをシリーズ化すると差を検証しやすい。</span></p>
          </div>
        </div>
      </section>

      <section className="ranking wrap" id="ranking">
        <div className="section-head">
          <div><span className="section-kicker">第一章｜戦果</span><h2>直近二ヶ月｜再生数 上位十投稿</h2></div>
          <p>{reportMeta.period}<br />公開画面の表示値を集計</p>
        </div>
        <div className="rank-table">
          <div className="rank-header"><span>RANK / POST</span><span>HOOK</span><span>VIEWS</span><span>LIKES</span><span>COMMENTS</span></div>
          {reels.map((reel) => (
            <a className="rank-row" href={`https://www.instagram.com/reel/${reel.shortcode}/`} target="_blank" rel="noreferrer" key={reel.shortcode}>
              <span className="rank-post"><b>{String(reel.rank).padStart(2, "0")}</b><span><strong>{reel.title}</strong><small>{reel.publishedAt} / {reel.shop}</small></span></span>
              <span className="rank-hook">「{reel.hook}」<small>{reel.hookType}</small></span>
              <span className="metric-cell"><Eye size={13} /> {compact.format(reel.views)}</span>
              <span className="metric-cell"><Heart size={13} /> {regular.format(reel.likes)}</span>
              <span className="metric-cell"><MessageCircle size={13} /> {regular.format(reel.comments)}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="pattern-section wrap" aria-labelledby="pattern-title">
        <div className="section-head">
          <div><span className="section-kicker">比較分析｜伸びの分岐点</span><h2 id="pattern-title">十投稿を横断して見えたこと</h2></div>
          <p>19投稿の期間中央値 5.3万再生<br />上位3本は 2.66〜3.96倍</p>
        </div>
        <div className="pattern-grid">
          {patternCards.map((card) => (
            <article key={card.no}>
              <header><span>{card.no}</span><b>{card.label}</b></header>
              <h3>{card.title}</h3><strong>{card.metric}</strong><p>{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="formula-section wrap">
        <div className="section-head"><div><span className="section-kicker">第二章｜勝ち口上</span><h2>伸びている構文 六ノ型</h2></div><p>@miyuno_gourmet のTOP10から抽出<br />次の投稿企画へ転用可能</p></div>
        <div className="formula-grid">
          {formulas.map((formula, index) => <article key={formula.label}><span>{String(index + 1).padStart(2, "0")}</span><b>{formula.label}</b><h3>「{formula.copy}」</h3><p>{formula.use}</p></article>)}
        </div>
        <div className="master-formula"><b>MASTER STRUCTURE</b><span>日付・期限・時間帯</span><i>→</i><span>0秒で工程を証明</span><i>→</i><span>二択で注文を決める</span><i>→</i><span>条件・場所で行動</span></div>
      </section>

      <section className="deep-section" id="analysis">
        <div className="wrap">
          <div className="section-head light"><div><span className="section-kicker">第三章｜動画解体録</span><h2>十投稿すべてを、因果で分析</h2></div><p>公開映像・尺・キャプション・反応を基に、<br />改善版台本、撮影指示、転用例まで提示</p></div>
          <div className="analysis-guide">
            <div><span>READING GUIDE</span><b>結論から、必要な項目だけ読む。</b></div>
            <p><i>1</i>投稿カードを開く</p><p><i>2</i><strong>最重要</strong>から確認</p><p><i>3</i>必要な施策だけ展開</p>
          </div>
          <div className="deep-list">
            {reels.map((reel) => {
              const deep = deepInstructions[reel.shortcode];
              return (
              <details className="reel-accordion" key={reel.shortcode}>
                <summary className="reel-summary">
                  <span className="summary-rank">#{String(reel.rank).padStart(2, "0")}</span>
                  <span className="summary-thumb">
                    <Image src={`/reels/${reel.shortcode}.jpg`} alt="" width={120} height={213} unoptimized />
                  </span>
                  <span className="summary-copy">
                    <span className="summary-meta"><b>{reel.hookType}</b>{reel.shop} ｜ {reel.publishedAt} ｜ {durationLabel(reel.duration)}</span>
                    <strong>{reel.title}</strong>
                    <span className="summary-verdict"><i>結論</i>{deep.verdict}</span>
                    <span className="summary-tags">{deep.causalChain.slice(0, 3).map((item) => <i key={item.label}>{item.label}</i>)}</span>
                  </span>
                  <span className="summary-stats">
                    <span><small>VIEWS</small><b>{compact.format(reel.views)}</b></span>
                    <span><Heart size={13} /> {regular.format(reel.likes)}</span>
                    <span><MessageCircle size={13} /> {regular.format(reel.comments)}</span>
                  </span>
                  <span className="summary-action"><span>詳細分析</span><ChevronDown size={19} /></span>
                </summary>

                <div className="reel-detail">
                  <aside className="detail-visual">
                    <a href={`https://www.instagram.com/reel/${reel.shortcode}/`} target="_blank" rel="noreferrer">
                      <Image src={`/reels/${reel.shortcode}.jpg`} alt={`${reel.title}の投稿画像`} width={360} height={640} unoptimized />
                      <span className="play-chip"><Play size={13} fill="currentColor" /> Instagramで見る</span>
                    </a>
                  </aside>
                  <div className="detail-content">
                    <div className="detail-dashboard">
                      <div><span>この投稿の核</span><b>「{reel.hook}」</b><p>{deep.verdict}</p><small className={`confidence confidence-${deep.confidence}`}>分析確度 {deep.confidence}</small></div>
                      <div className="reaction-strip">
                        <span><Eye size={14} /><b>{regular.format(reel.views)}</b>再生</span>
                        <span><Heart size={14} /><b>{regular.format(reel.likes)}</b>いいね</span>
                        <span><MessageCircle size={14} /><b>{regular.format(reel.comments)}</b>コメント</span>
                        <span><TrendingUp size={14} /><b>{percent(reel.likes, reel.views)}</b>いいね率</span>
                      </div>
                    </div>

                    <div className="evidence-strip">
                      <b><ShieldCheck size={15} /> 判断根拠</b>
                      {deep.evidence.map((item) => <span key={item}>{item}</span>)}
                    </div>

                    <details className="analysis-fold priority-high">
                      <summary><span className="fold-no">01</span><span><b>勝因と因果を確認</b><small>停止→期待→証明→報酬→行動で分解</small></span><em>最重要</em><ChevronDown /></summary>
                      <div className="fold-content">
                        <div className="causal-grid">{deep.causalChain.map((item, index) => <div key={item.label}><b>{String(index + 1).padStart(2, "0")}｜{item.label}</b><p>{item.detail}</p></div>)}</div>
                        <div className="analysis-grid">
                          <section><span><TrendingUp size={15} /> なぜ伸びた</span><p>{reel.why}</p></section>
                          <section><span><Check size={15} /> 良かった点</span><p>{reel.good}</p></section>
                        </div>
                        <div className="risk-box"><b>離脱リスク</b><p>{deep.watchRisk}</p></div>
                        <div className="counterfactual-box"><b>反証｜この要素がなければ</b><p>{deep.counterfactual}</p></div>
                        <div className="comment-box"><b>コメントから読める視聴者心理</b><p>{deep.commentInsight}</p></div>
                        {reel.reactionNote && <div className="reaction-note"><b>数字の読み方</b><p>{reel.reactionNote}</p></div>}
                      </div>
                    </details>

                    <details className="analysis-fold">
                      <summary><span className="fold-no">02</span><span><b>フックと動画構成</b><small>冒頭の言葉・映像・情報の順番</small></span><em>構造</em><ChevronDown /></summary>
                      <div className="fold-content">
                        <div className="hook-block"><small>OPENING HOOK</small><blockquote>「{reel.hook}」</blockquote><p>{reel.visual}</p></div>
                        <h4 className="subhead">公開映像から読む現在の構成</h4>
                        <div className="structure-flow">{reel.structure.map((step, index) => <span key={step}><b>{index + 1}</b>{step}</span>)}</div>
                      </div>
                    </details>

                    <details className="analysis-fold">
                      <summary><span className="fold-no">03</span><span><b>改善版｜秒数別の台本</b><small>次の一本でそのまま使える編集指示</small></span><em>実践</em><ChevronDown /></summary>
                      <div className="fold-content">
                        <div className="improvement-lead"><WandSparkles size={17} /><span><b>もっと伸ばすなら</b><p>{reel.improve}</p></span></div>
                        <section className="production-plan">
                          <header><div><span>改善版</span><h4>秒数別 台本・編集指示書</h4></div><p>伸びた要素を残し、離脱要因を削った推奨構成</p></header>
                          <div className="timeline-list">{deep.optimizedTimeline.map((item, index) => <div key={`${item.time}-${index}`}><time>{item.time}</time><span><b>{item.scene}</b><small>テロップ｜{item.overlay}</small></span><p>{item.purpose}</p></div>)}</div>
                        </section>
                      </div>
                    </details>

                    <details className="analysis-fold">
                      <summary><span className="fold-no">04</span><span><b>撮影カットと冒頭A/B案</b><small>撮るものと言葉を具体化</small></span><em>撮影</em><ChevronDown /></summary>
                      <div className="fold-content execution-grid">
                        <section><span>必要な撮影カット</span><ol>{deep.shotList.map((shot) => <li key={shot}>{shot}</li>)}</ol></section>
                        <section><span>冒頭A/Bテスト案</span><div className="ab-copy"><p><b>A</b>「{deep.abHooks[0]}」</p><p><b>B</b>「{deep.abHooks[1]}」</p></div></section>
                      </div>
                    </details>

                    <details className="analysis-fold priority-transfer">
                      <summary><span className="fold-no">05</span><span><b>次の投稿への具体転用</b><small>別ジャンルでも再現できる企画へ置き換える</small></span><em>次回企画</em><ChevronDown /></summary>
                      <div className="fold-content">
                        <div className="transfer-box">
                          <header><Target size={18} /><span><small>転用しやすい一般ジャンル</small><b>{deep.transfer.forWhom}</b></span></header>
                          <div><span>次回の企画例</span><b>{deep.transfer.example}</b></div>
                          <p>{deep.transfer.script}</p>
                        </div>
                        <div className="success-box"><TrendingUp size={16} /><span><small>検証する数字</small><b>{deep.successMetric}</b></span></div>
                      </div>
                    </details>
                  </div>
                </div>
              </details>
            );})}
          </div>
        </div>
      </section>

      <section className="capability-section">
        <div className="capability wrap">
          <header className="capability-heading">
            <div><span className="section-kicker">第四章｜次の投稿に活かす</span><h2>伸びた理由を、<br />次の一本の設計判断へ。</h2></div>
            <div className="capability-statement"><small>NEXT POST METHOD</small><b>最強の焼き・炙り・断面を0秒へ。</b><b>限定は、終了日と購入条件まで同画面に。</b><b>長い紹介は、商品別のシリーズへ分ける。</b><p>過去投稿の成功を感覚で終わらせず、焼肉・焼き鳥・ラーメン・スイーツなど、次に紹介しやすい定番ジャンルへ移せる投稿設計に変換します。</p></div>
          </header>

          <div className="capability-process" aria-label="分析から実行までの流れ">
            <article>
              <span className="process-no">01</span><div className="process-icon"><ScanSearch /></div><small>DIAGNOSE</small><h3>基準値との<br />差を判定</h3><p>期間内19投稿の中央値と比較し、本当に突出した投稿を再生・好意・会話の三方向から見極めます。</p><div><span>OUTPUT</span><b>中央値比・反応率</b></div>
            </article>
            <article>
              <span className="process-no">02</span><div className="process-icon"><BarChart3 /></div><small>DECONSTRUCT</small><h3>伸びた理由を<br />因果で分解</h3><p>停止・期待・証明・報酬・行動に分け、表紙、数字、工程、条件が担った役割を可視化します。</p><div><span>OUTPUT</span><b>勝因・反証・離脱点</b></div>
            </article>
            <article>
              <span className="process-no">03</span><div className="process-icon"><Sparkles /></div><small>TRANSLATE</small><h3>勝ち構造を<br />定番店へ翻訳</h3><p>言葉だけを真似せず、焼肉・焼き鳥・ラーメン・定食など次の店で再現できる心理構造へ置き換えます。</p><div><span>OUTPUT</span><b>フックA/B・転用台本</b></div>
            </article>
            <article>
              <span className="process-no">04</span><div className="process-icon"><Target /></div><small>EXECUTE</small><h3>迷わず撮れる<br />投稿設計にする</h3><p>何秒で、何を、どの画角で撮るか。投稿後にどの数字を見るかまで、次回の撮影へ接続します。</p><div><span>OUTPUT</span><b>秒数別台本・検証指標</b></div>
            </article>
          </div>

          <div className="capability-output">
            <div className="output-title"><small>NEXT POST KIT</small><h3>次の投稿に使える分析結果</h3><p>感想ではなく、企画選定と撮影時にそのまま使える形へ。</p></div>
            <div className="output-list"><span>中央値比較</span><span>因果5段階</span><span>反証分析</span><span>秒数別台本</span><span>A/Bテスト</span><span>検証指標</span></div>
            <aside><small>CREATOR VALUE</small><b>「伸びた事実」と「伸びたと考える理由」を混ぜない。</b><p>公開データの観察、因果の推定、次回の検証仮説を分けることで、投稿後に学習できる設計へ変換します。</p></aside>
          </div>
        </div>
      </section>

      <section className="method wrap">
        <div><b>分析条件</b><p>対象：@miyuno_gourmet ／ 期間：{reportMeta.period} ／ 期間内{reportMeta.eligiblePosts}本を確認し、再生数降順で上位10件を抽出。同再生数は投稿日が新しい投稿を上位とし、期間外投稿は投稿日を照合して除外。</p></div>
        <div><b>データについて</b><p>再生・いいね・コメント・投稿日は{reportMeta.measuredTime}にInstagram公開画面で確認。再生・フォロワーは公開丸め値を整数化し、一部反応数は表示キャッシュを含むスナップショットです。</p></div>
        <div><b>分析の範囲</b><p>公開リールの冒頭映像・尺・表紙・キャプション・公開指標から行った因果仮説です。観察事実、解釈、反証を分け、改善タイムラインは次回向け提案として記載。非公開の維持率・保存数・シェア数は含みません。</p></div>
      </section>

      <footer className="footer wrap" id="footer"><div className="logo"><span>青</span><b>青森<br />リール戦略</b></div><p>@miyuno_gourmet 専用分析レポート<br />© 2026</p></footer>
    </main>
  );
}
