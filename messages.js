/**
 * Pedagogical Perspective — Editorial Message Bank
 * IIFE data module  •  v2.0  •  2025
 * Usage: <script src="messages.js"></script>  → window.PEDPER_MESSAGES
 */
(function (global) {
  'use strict';

  var PEDPER_MESSAGES = {

    version: '2.0',

    journal: {
      name:   'Pedagogical Perspective',
      abbr:   'PedPer',
      issn:   '2822-4841',
      editor: 'Emrah AKMAN',
      email:  'info@pedagogicalperspective.com',
      url:    'https://pedagogicalperspective.com'
    },

    roles: [
      { id: 'eic',    color: '#3b2a7a', icon: '👑', label: { en: 'Editor-in-Chief',   tr: 'Baş Editör'           } },
      { id: 'se',     color: '#1a6b3c', icon: '📋', label: { en: 'Section Editor',     tr: 'Alan Editörü'         } },
      { id: 'stat',   color: '#1a5a8a', icon: '📊', label: { en: 'Statistics Editor',  tr: 'İstatistik Editörü'   } },
      { id: 'lang',   color: '#7a4a00', icon: '✍️', label: { en: 'Language Editor',    tr: 'Dil Editörü'          } },
      { id: 'layout', color: '#6b1a5a', icon: '🎨', label: { en: 'Layout Editor',      tr: 'Mizanpaj Editörü'     } },
      { id: 'sec',    color: '#4a3000', icon: '📌', label: { en: 'Secretary',           tr: 'Sekreter'             } }
    ],

    stages: [
      { id: 'submission',   label: { en: 'Submission',       tr: 'Başvuru'             } },
      { id: 'desk',         label: { en: 'Desk Review',      tr: 'Ön Değerlendirme'    } },
      { id: 'integrity',    label: { en: 'Integrity Check',  tr: 'Bütünlük Kontrolü'   } },
      { id: 'review',       label: { en: 'Peer Review',      tr: 'Hakemlik'            } },
      { id: 'revision',     label: { en: 'Revision',         tr: 'Revizyon'            } },
      { id: 'decision',     label: { en: 'Decision',         tr: 'Karar'               } },
      { id: 'copyediting',  label: { en: 'Copyediting',      tr: 'Dil Düzenleme'       } },
      { id: 'layout',       label: { en: 'Layout',           tr: 'Mizanpaj'            } },
      { id: 'proofreading', label: { en: 'Proofreading',     tr: 'Son Okuma'           } },
      { id: 'production',   label: { en: 'Production',       tr: 'Yayın'               } },
      { id: 'postpub',      label: { en: 'Post-Publication', tr: 'Yayın Sonrası'       } },
      { id: 'other',        label: { en: 'Other',            tr: 'Diğer'               } }
    ],

    /* ─────────────────────────────────────────────────────────────────────
       MESSAGES
       Each entry: { id, role, stage, title:{en,tr}, subject:{en,tr}, body:{en,tr} }
    ───────────────────────────────────────────────────────────────────── */
    messages: [

      /* ══════════════════════════════════════════════════════
         EDITOR-IN-CHIEF  (eic)
      ══════════════════════════════════════════════════════ */

      {
        id: 'eic-01', role: 'eic', stage: 'submission',
        title: { en: 'Submission Acknowledgment', tr: 'Makale Alındı Bildirimi' },
        subject: {
          en: 'Manuscript Received — Pedagogical Perspective [Ref: {ID}]',
          tr: 'Makale Alındı — Pedagogical Perspective [Ref: {ID}]'
        },
        body: {
          en: `Dear Author(s),

Thank you for submitting your manuscript titled "{TITLE}" to Pedagogical Perspective (PedPer). We confirm receipt of your submission, which has been assigned the reference number {ID}.

Your manuscript will now undergo an initial editorial screening to assess its alignment with the journal's scope, formatting standards, and ethical requirements. You will be notified of the outcome within approximately {X} working days.

Please note that submission to Pedagogical Perspective constitutes the authors' confirmation that the manuscript is original, has not been previously published in whole or in part, and is not currently under editorial consideration at any other journal.

If you have any questions in the meantime, please do not hesitate to contact us at editor@pedagogicalperspective.com.

We appreciate your interest in Pedagogical Perspective and look forward to reviewing your work.

Sincerely,
Emrah AKMAN
Editor-in-Chief
Pedagogical Perspective
editor@pedagogicalperspective.com
https://pedagogicalperspective.com`,
          tr: `Sayın Yazar(lar),

"{BAŞLIK}" başlıklı makalenizi Pedagogical Perspective (PedPer) dergisine ilettiğiniz için teşekkür ederiz. Başvurunuz alınmış olup {ID} referans numarası atanmıştır.

Makaleniz, dergimizin kapsam alanı, biçimlendirme standartları ve etik gerekliliklerine uygunluğunun değerlendirilmesi amacıyla ön editöryal incelemeye alınacaktır. Bu aşamanın tahminen {X} iş günü içinde tamamlanması beklenmekte olup sonuç hakkında bilgilendirileceksiniz.

Dergimize başvuru yapılması, yazarların makalenin özgün olduğunu, daha önce kısmen ya da tamamen yayımlanmadığını ve başka bir dergide değerlendirme sürecinde bulunmadığını beyan etmesi anlamına gelir.

Bu süreçte herhangi bir sorunuz olursa editor@pedagogicalperspective.com adresinden bizimle iletişime geçebilirsiniz.

Pedagogical Perspective'e gösterdiğiniz ilgi için teşekkür eder, çalışmalarınızı incelemeyi sabırsızlıkla bekleriz.

Saygılarımızla,
Emrah AKMAN
Baş Editör
Pedagogical Perspective
editor@pedagogicalperspective.com
https://pedagogicalperspective.com`
        }
      },

      {
        id: 'eic-02', role: 'eic', stage: 'desk',
        title: { en: 'Desk Rejection', tr: 'Ön Değerlendirme Reddi' },
        subject: {
          en: 'Initial Editorial Decision — Pedagogical Perspective [Ref: {ID}]',
          tr: 'Ön Değerlendirme Kararı — Pedagogical Perspective [Ref: {ID}]'
        },
        body: {
          en: `Dear Author(s),

Thank you for submitting your manuscript titled "{TITLE}" to Pedagogical Perspective (PedPer). We have carefully assessed your submission at the initial editorial review stage.

After this assessment, we regret to inform you that we are unable to advance your manuscript to the peer review stage. The decision is based on the following reason(s):

☐ The manuscript falls outside the thematic scope of Pedagogical Perspective.
☐ The manuscript does not meet the journal's minimum structural or formatting requirements.
☐ There are significant concerns regarding methodological rigor or academic clarity.
☐ The English language proficiency requires substantial improvement prior to peer review.
☐ Other: ___________________________________

Please note that this decision does not constitute a judgment on the scientific merit of your research. We encourage you to revise the manuscript accordingly and consider submitting to a more suitable publication.

We thank you for your interest in Pedagogical Perspective and wish you every success with your research.

Sincerely,
Emrah AKMAN
Editor-in-Chief
Pedagogical Perspective`,
          tr: `Sayın Yazar(lar),

"{BAŞLIK}" başlıklı makalenizi Pedagogical Perspective (PedPer) dergisine ilettiğiniz için teşekkür ederiz. Başvurunuz ön editöryal değerlendirme aşamasında titizlikle incelenmiştir.

Bu değerlendirme sonucunda, üzülerek belirtmek gerekir ki makalenizin hakem değerlendirmesi sürecine alınması mümkün olamamaktadır. Bu karar aşağıdaki gerekçe(ler)e dayalı olarak verilmiştir:

☐ Makale, Pedagogical Perspective'in tematik kapsam alanı dışında kalmaktadır.
☐ Makale, derginin asgari yapısal veya biçimlendirme gerekliliklerini karşılamamaktadır.
☐ Yöntemsel titizlik veya akademik netlik açısından ciddi kaygılar mevcuttur.
☐ Makalenin İngilizce dil yetkinliğinin, hakeme gönderilmeden önce önemli ölçüde geliştirilmesi gerekmektedir.
☐ Diğer: ___________________________________

Bu kararın araştırmanızın bilimsel değerine ilişkin herhangi bir yargıyı yansıtmadığını belirtmek isteriz. Makalenizi belirtilen doğrultuda gözden geçirmenizi ve daha uygun bir dergiye göndermenizi öneririz.

Pedagogical Perspective'e gösterdiğiniz ilgi için teşekkür eder, çalışmalarınızda başarılar dileriz.

Saygılarımızla,
Emrah AKMAN
Baş Editör
Pedagogical Perspective`
        }
      },

      {
        id: 'eic-03', role: 'eic', stage: 'review',
        title: { en: 'Reviewer Suggestion Request', tr: 'Hakem Önerisi Talebi' },
        subject: {
          en: 'Reviewer Suggestion Request — Pedagogical Perspective [Ref: {ID}]',
          tr: 'Hakem Önerisi Talebi — Pedagogical Perspective [Ref: {ID}]'
        },
        body: {
          en: `Dear Author(s),

We are pleased to inform you that your manuscript titled "{TITLE}" has successfully passed the initial editorial review and is now ready to proceed to the peer review stage.

To help ensure a high-quality evaluation process, we kindly invite you to suggest at least two (preferably three) potential reviewers who are experts in the field relevant to your study. For each suggested reviewer, please provide the following:

1. Full Name
2. Institutional Affiliation
3. E-mail Address
4. ORCID
5. Specialized Field / Research Area

Please ensure that the proposed reviewers are not affiliated with the manuscript in any way (e.g., co-authors, thesis advisors, or researchers from the same institution). You may provide this information by filling in the attached "PedPer Reviewer Suggestion Form" and returning it to us via e-mail.

Kindly note that your suggestions are not binding and will only be considered as part of the reviewer selection process.

We appreciate your cooperation and will keep you informed about the progress of the evaluation in due course.

Sincerely,
Emrah AKMAN
Editor-in-Chief
Pedagogical Perspective`,
          tr: `Sayın Yazar(lar),

"{BAŞLIK}" başlıklı makalenizin ön editöryal incelemeyi başarıyla geçtiğini ve hakem değerlendirme aşamasına alınmaya hazır olduğunu bildirmekten memnuniyet duyarız.

Yüksek kaliteli bir değerlendirme sürecini güvence altına almak amacıyla, çalışmanızla ilgili alanda uzman en az iki (tercihen üç) potansiyel hakem önermenizi rica ediyoruz. Önerdiğiniz her hakem için lütfen aşağıdaki bilgileri sağlayınız:

1. Ad Soyad
2. Kurumsal Bağlantı
3. E-posta Adresi
4. ORCID
5. Uzmanlık Alanı / Araştırma Konusu

Önerdiğiniz hakemlerin, makale ile herhangi bir bağlantısının bulunmadığından emin olunuz (örn. ortak yazarlar, tez danışmanları veya aynı kurumdan araştırmacılar). Bu bilgileri, ekli "PedPer Hakem Öneri Formu"nu doldurarak e-posta yoluyla tarafımıza iletebilirsiniz.

Önerilerinizin bağlayıcı olmadığını ve yalnızca hakem seçim sürecinde dikkate alınacağını belirtmek isteriz.

İşbirliğiniz için teşekkür eder, değerlendirme sürecindeki gelişmeler hakkında sizi bilgilendireceğimizi bildiririz.

Saygılarımızla,
Emrah AKMAN
Baş Editör
Pedagogical Perspective`
        }
      },

      {
        id: 'eic-04', role: 'eic', stage: 'review',
        title: { en: 'Sent to Peer Review', tr: 'Hakeme Gönderim Bildirimi' },
        subject: {
          en: 'Under Review — Pedagogical Perspective [Ref: {ID}]',
          tr: 'Hakemlik Sürecine Alındı — Pedagogical Perspective [Ref: {ID}]'
        },
        body: {
          en: `Dear Author(s),

We are pleased to inform you that your manuscript titled "{TITLE}" has been forwarded to peer reviewers for evaluation.

Pedagogical Perspective follows a double-blind peer review process, whereby all manuscripts are evaluated by at least two independent reviewers with expertise in the relevant field. The identity of both authors and reviewers remains confidential throughout the process.

We aim to complete the review stage within {X} weeks; however, timelines may vary depending on reviewer availability. We will keep you informed of any significant updates.

We appreciate your patience and continued interest in Pedagogical Perspective.

Sincerely,
Emrah AKMAN
Editor-in-Chief
Pedagogical Perspective`,
          tr: `Sayın Yazar(lar),

"{BAŞLIK}" başlıklı makalenizin hakem değerlendirmesi için ilgili uzmanlara iletildiğini bildirmekten memnuniyet duyarız.

Pedagogical Perspective, çift kör hakem değerlendirme sürecini benimsemektedir; bu süreçte her makale, ilgili alanda uzman en az iki bağımsız hakem tarafından incelenmektedir. Süreç boyunca hem yazarların hem de hakemlerin kimlikleri gizli tutulmaktadır.

Değerlendirme aşamasının {X} hafta içinde tamamlanması hedeflenmekte; ancak hakem müsaitlik durumuna bağlı olarak zaman çizelgesi değişkenlik gösterebilmektedir. Önemli gelişmeler hakkında sizi bilgilendirmeye devam edeceğiz.

Sabrınız ve Pedagogical Perspective'e gösterdiğiniz süregelen ilgi için teşekkür ederiz.

Saygılarımızla,
Emrah AKMAN
Baş Editör
Pedagogical Perspective`
        }
      },

      {
        id: 'eic-05', role: 'eic', stage: 'revision',
        title: { en: 'Major Revision Required', tr: 'Majör Revizyon Talebi' },
        subject: {
          en: 'Decision: Major Revision Required — Pedagogical Perspective [Ref: {ID}]',
          tr: 'Karar: Majör Revizyon Gerekli — Pedagogical Perspective [Ref: {ID}]'
        },
        body: {
          en: `Dear Author(s),

Thank you for submitting your manuscript titled "{TITLE}" to Pedagogical Perspective (PedPer). We have now received evaluations from the peer reviewers, and after careful consideration, we have reached an editorial decision.

We are pleased to inform you that your manuscript shows promising potential; however, the reviewers have identified several significant concerns that must be addressed before the manuscript can be considered further. We therefore invite you to submit a major revised version of your manuscript.

Please find the reviewers' comments attached to this message (or accessible via the OJS system). We kindly request that you:

1. Address all reviewer comments in full and with academic precision.
2. Prepare a detailed response document using the PedPer Revision Form, indicating how each comment has been addressed.
3. Highlight all changes made in the revised manuscript (e.g., using Track Changes or coloured text).

Please submit your revised manuscript within {X} weeks. If you require additional time, please contact us in advance.

Kindly note that a resubmission does not guarantee acceptance and will undergo a further round of evaluation.

We look forward to receiving your revised manuscript.

Sincerely,
Emrah AKMAN
Editor-in-Chief
Pedagogical Perspective`,
          tr: `Sayın Yazar(lar),

"{BAŞLIK}" başlıklı makalenizi Pedagogical Perspective (PedPer) dergisine ilettiğiniz için teşekkür ederiz. Hakem değerlendirmeleri tarafımıza ulaşmış olup dikkatli bir editöryal incelemenin ardından karara varılmıştır.

Makalenizin umut verici bir potansiyel taşıdığını bildirmekten memnuniyet duyarız; ancak hakemler, makalenin daha ileri bir aşamaya taşınabilmesi için ele alınması gereken çeşitli önemli kaygılar dile getirmiştir. Bu doğrultuda sizden makalenizin majör revize edilmiş bir versiyonunu sunmanızı talep ediyoruz.

Hakem görüşleri bu mesaja eklenmiş (veya OJS sistemi üzerinden erişilebilir) durumdadır. Aşağıdaki adımları takip etmenizi rica ederiz:

1. Tüm hakem yorumlarını eksiksiz ve akademik bir titizlikle ele alınız.
2. Her yorumun nasıl karşılandığını açıklayan ayrıntılı bir yanıt belgesi hazırlamak için PedPer Revizyon Formu'nu kullanınız.
3. Revize edilmiş makalede yapılan tüm değişiklikleri vurgulayınız (örn. İzleme Değişiklikleri veya renkli metin kullanarak).

Lütfen revize edilmiş makalenizi {X} hafta içinde iletiniz. Ek süreye ihtiyaç duymanız halinde lütfen önceden bizimle iletişime geçiniz.

Yeniden gönderimin kabulü garanti etmediğini ve makalenin ek bir değerlendirme turuna tabi tutulacağını belirtmek isteriz.

Revize edilmiş makalenizi bekliyoruz.

Saygılarımızla,
Emrah AKMAN
Baş Editör
Pedagogical Perspective`
        }
      },

      {
        id: 'eic-06', role: 'eic', stage: 'revision',
        title: { en: 'Minor Revision Required', tr: 'Minör Revizyon Talebi' },
        subject: {
          en: 'Decision: Minor Revision Required — Pedagogical Perspective [Ref: {ID}]',
          tr: 'Karar: Minör Revizyon Gerekli — Pedagogical Perspective [Ref: {ID}]'
        },
        body: {
          en: `Dear Author(s),

Thank you for submitting your manuscript titled "{TITLE}" to Pedagogical Perspective (PedPer). We have carefully reviewed the peer evaluations and are pleased to report a positive editorial assessment.

While the manuscript demonstrates strong scholarly merit, the reviewers have identified minor issues that should be addressed before final acceptance. We therefore invite you to submit a minor revised version of your manuscript.

The reviewers' comments are attached (or available via the OJS system). Please:

1. Address all reviewer comments thoroughly and include your responses in the PedPer Revision Form.
2. Mark all changes in the revised manuscript using Track Changes or coloured text.

Please submit your revised manuscript within {X} weeks. Upon receipt, the revised version will be reviewed—primarily by the editorial team—to verify that all concerns have been adequately addressed.

We look forward to receiving your revised manuscript.

Sincerely,
Emrah AKMAN
Editor-in-Chief
Pedagogical Perspective`,
          tr: `Sayın Yazar(lar),

"{BAŞLIK}" başlıklı makalenizi Pedagogical Perspective (PedPer) dergisine ilettiğiniz için teşekkür ederiz. Hakem değerlendirmeleri dikkatle incelenmiş olup olumlu bir editöryal değerlendirme yapılmıştır.

Makale güçlü bir akademik nitelik sergilemekle birlikte, hakemler nihai kabulden önce ele alınması gereken bazı küçük ölçekli sorunlar tespit etmiştir. Bu nedenle makalenizin minör revize edilmiş bir versiyonunu sunmanızı talep ediyoruz.

Hakem görüşleri eklenmiş (veya OJS sistemi üzerinden erişilebilir) durumdadır. Lütfen:

1. Tüm hakem yorumlarını kapsamlı biçimde ele alınız ve yanıtlarınızı PedPer Revizyon Formu'na ekleyiniz.
2. Revize edilmiş makalede yapılan tüm değişiklikleri İzleme Değişiklikleri veya renkli metin ile işaretleyiniz.

Lütfen revize edilmiş makalenizi {X} hafta içinde iletiniz. Alındığında, revize edilmiş sürüm—öncelikle editör kurulu tarafından—tüm kaygıların yeterince giderilip giderilmediğini doğrulamak amacıyla incelenecektir.

Revize edilmiş makalenizi bekliyoruz.

Saygılarımızla,
Emrah AKMAN
Baş Editör
Pedagogical Perspective`
        }
      },

      {
        id: 'eic-07', role: 'eic', stage: 'revision',
        title: { en: 'Revision Received + Revision Form Request', tr: 'Revizyon Alındı + Revizyon Formu Talebi' },
        subject: {
          en: 'Revised Manuscript Received — Pedagogical Perspective [Ref: {ID}]',
          tr: 'Revize Makale Alındı — Pedagogical Perspective [Ref: {ID}]'
        },
        body: {
          en: `Dear Author(s),

Thank you for submitting the revised version of your manuscript titled "{TITLE}". We confirm that the revised manuscript has been successfully received.

To proceed with the evaluation of your revised submission, we kindly request that you complete the PedPer Revision Form, detailing how you have addressed each of the reviewers' comments. Please upload the completed form in response to this message (or via the OJS system).

This will enable us to finalize the review process effectively and ensure a transparent evaluation of the revisions made.

We appreciate your cooperation and will keep you informed of the outcome in due course.

Sincerely,
Emrah AKMAN
Editor-in-Chief
Pedagogical Perspective`,
          tr: `Sayın Yazar(lar),

"{BAŞLIK}" başlıklı makalenizin revize edilmiş versiyonunu ilettiğiniz için teşekkür ederiz. Revize makalenin başarıyla alındığını teyit ederiz.

Revize başvurunuzun değerlendirmesine devam edebilmek için, hakem yorumlarının her birinin nasıl ele alındığını ayrıntılı biçimde açıklayan PedPer Revizyon Formu'nu doldurmanızı rica ederiz. Doldurulmuş formu bu mesaja yanıt olarak (veya OJS sistemi aracılığıyla) yükleyiniz.

Bu adım, inceleme sürecini etkin biçimde tamamlamamıza ve yapılan revizyonların şeffaf değerlendirmesini sağlamamıza yardımcı olacaktır.

İşbirliğiniz için teşekkür eder, sonuç hakkında zamanı geldiğinde sizi bilgilendireceğimizi bildiririz.

Saygılarımızla,
Emrah AKMAN
Baş Editör
Pedagogical Perspective`
        }
      },

      {
        id: 'eic-08', role: 'eic', stage: 'decision',
        title: { en: 'Manuscript Accepted', tr: 'Makale Kabul Edildi' },
        subject: {
          en: 'Manuscript Accepted — Pedagogical Perspective [Ref: {ID}]',
          tr: 'Makale Kabul Edildi — Pedagogical Perspective [Ref: {ID}]'
        },
        body: {
          en: `Dear Author(s),

We are delighted to inform you that your manuscript titled "{TITLE}" has been accepted for publication in Pedagogical Perspective (PedPer).

On behalf of the Editorial Board, I would like to congratulate you on this achievement. Your manuscript will now proceed to the production stage, which includes copyediting, layout, and final proofreading. You will be contacted at each stage as necessary.

Please note that any further editorial changes will be limited to minor language and formatting corrections that do not affect the academic content of your manuscript.

The approximate publication schedule for your article is:
  Issue:      {ISSUE}
  Volume:     {VOLUME}
  Year:       {YEAR}

We thank you for your valuable contribution to Pedagogical Perspective and look forward to publishing your work.

Sincerely,
Emrah AKMAN
Editor-in-Chief
Pedagogical Perspective`,
          tr: `Sayın Yazar(lar),

"{BAŞLIK}" başlıklı makalenizin Pedagogical Perspective (PedPer) dergisinde yayımlanmak üzere kabul edildiğini bildirmekten büyük memnuniyet duyarız.

Editör Kurulu adına bu başarı için sizi tebrik etmek isterim. Makaleniz şimdi dil düzenleme, mizanpaj ve son okuma aşamalarını kapsayan üretim sürecine alınacaktır. Her aşamada gerektiğinde sizinle iletişime geçilecektir.

Bundan sonra yapılacak herhangi bir editöryal değişikliğin, makalenizin akademik içeriğini etkilemeyen küçük dil ve biçimlendirme düzeltmeleriyle sınırlı kalacağını belirtmek isteriz.

Makalenizin tahmini yayın programı:
  Sayı:       {SAYI}
  Cilt:       {CİLT}
  Yıl:        {YIL}

Pedagogical Perspective'e yaptığınız değerli katkı için teşekkür eder, çalışmanızı yayımlamayı sabırsızlıkla bekleriz.

Saygılarımızla,
Emrah AKMAN
Baş Editör
Pedagogical Perspective`
        }
      },

      {
        id: 'eic-09', role: 'eic', stage: 'decision',
        title: { en: 'Reject After Peer Review', tr: 'Hakemlik Sonrası Red' },
        subject: {
          en: 'Editorial Decision — Pedagogical Perspective [Ref: {ID}]',
          tr: 'Editöryal Karar — Pedagogical Perspective [Ref: {ID}]'
        },
        body: {
          en: `Dear Author(s),

Thank you for submitting your manuscript titled "{TITLE}" to Pedagogical Perspective (PedPer), and for your patience during the peer review process.

After a thorough evaluation of your manuscript by independent reviewers and a careful editorial assessment, we regret to inform you that we are unable to accept your manuscript for publication in PedPer at this time.

The peer reviewers raised significant concerns regarding:
☐ Conceptual and theoretical framework
☐ Research methodology and design
☐ Data analysis and interpretation
☐ Discussion and contribution to the literature
☐ Overall scholarly rigour and presentation
☐ Other: ___________________________________

We recognise the effort invested in this work and encourage you to consider the reviewers' comments carefully as you revise the manuscript for submission to another journal.

We thank you for your interest in Pedagogical Perspective and wish you every success with your research.

Sincerely,
Emrah AKMAN
Editor-in-Chief
Pedagogical Perspective`,
          tr: `Sayın Yazar(lar),

"{BAŞLIK}" başlıklı makalenizi Pedagogical Perspective (PedPer) dergisine ilettiğiniz ve hakem değerlendirme süreci boyunca gösterdiğiniz sabır için teşekkür ederiz.

Bağımsız hakemler tarafından gerçekleştirilen kapsamlı değerlendirme ve dikkatli bir editöryal incelemenin ardından, üzülerek belirtmek gerekir ki makalenizin PedPer'de yayımlanmak üzere kabul edilmesi mümkün olamamaktadır.

Hakem değerlendiricileri aşağıdaki konularda önemli kaygılar dile getirmiştir:
☐ Kavramsal ve kuramsal çerçeve
☐ Araştırma yöntemi ve deseni
☐ Veri analizi ve yorumlama
☐ Tartışma ve alanyazına katkı
☐ Genel akademik titizlik ve sunum
☐ Diğer: ___________________________________

Bu çalışmaya harcanan emeği takdirle karşılıyor ve makalenizi başka bir dergiye göndermeden önce hakem görüşlerini dikkatlice değerlendirmenizi öneririz.

Pedagogical Perspective'e gösterdiğiniz ilgi için teşekkür eder, çalışmalarınızda başarılar dileriz.

Saygılarımızla,
Emrah AKMAN
Baş Editör
Pedagogical Perspective`
        }
      },

      {
        id: 'eic-10', role: 'eic', stage: 'desk',
        title: { en: 'Conflict of Interest Form Request', tr: 'Çıkar Çatışması Formu Talebi' },
        subject: {
          en: 'Action Required: Conflict of Interest Declaration — Pedagogical Perspective [Ref: {ID}]',
          tr: 'İşlem Gerekli: Çıkar Çatışması Beyanı — Pedagogical Perspective [Ref: {ID}]'
        },
        body: {
          en: `Dear Author(s),

Please find attached the PedPer Conflict of Interest Declaration Form related to your manuscript titled "{TITLE}", currently under editorial consideration at Pedagogical Perspective (PedPer).

In accordance with COPE (Committee on Publication Ethics) guidelines, all authors are required to disclose any financial, personal, or professional relationships that could be perceived as influencing the research reported in the manuscript.

Kindly complete all relevant sections of the form and return it to us at your earliest convenience, either by e-mail or via the OJS submission system.

Thank you for your cooperation.

Warm regards,
Emrah AKMAN
Editor-in-Chief
Pedagogical Perspective`,
          tr: `Sayın Yazar(lar),

Pedagogical Perspective (PedPer) dergisinde editöryal değerlendirme sürecinde bulunan "{BAŞLIK}" başlıklı makalenizle ilgili PedPer Çıkar Çatışması Beyan Formu ekte sunulmaktadır.

COPE (Yayın Etiği Komitesi) yönergelerine uygun olarak, tüm yazarların makalede sunulan araştırmayı etkilediği değerlendirilebilecek finansal, kişisel veya mesleki ilişkileri beyan etmesi gerekmektedir.

Lütfen formdaki ilgili tüm bölümleri doldurunuz ve mümkün olan en kısa sürede e-posta yoluyla ya da OJS başvuru sistemi aracılığıyla tarafımıza iletiniz.

İşbirliğiniz için teşekkür ederiz.

Saygılarımızla,
Emrah AKMAN
Baş Editör
Pedagogical Perspective`
        }
      },

      {
        id: 'eic-11', role: 'eic', stage: 'desk',
        title: { en: 'Title Page Request', tr: 'Başlık Sayfası Talebi' },
        subject: {
          en: 'Action Required: Title Page Submission — Pedagogical Perspective [Ref: {ID}]',
          tr: 'İşlem Gerekli: Başlık Sayfası Gönderimi — Pedagogical Perspective [Ref: {ID}]'
        },
        body: {
          en: `Dear Author(s),

Thank you for your interest in publishing with Pedagogical Perspective.

In order to proceed with the editorial process of your manuscript titled "{TITLE}", we kindly request that you complete and submit the journal's official "PedPer Title Page" form.

You may download the Title Page template from the journal website or request it by replying to this e-mail. Please ensure that all required fields are filled out accurately, including:

• Manuscript title (in English and Turkish, if applicable)
• Full names and institutional affiliations of all authors
• Corresponding author's contact information (name, e-mail, ORCID, address)
• Author contribution statements (CRediT taxonomy)
• Acknowledgements (if any)
• Data availability statement

Please submit the completed document at your earliest convenience.

Best regards,
Emrah AKMAN
Editor-in-Chief
Pedagogical Perspective
https://pedagogicalperspective.com`,
          tr: `Sayın Yazar(lar),

Pedagogical Perspective dergisine gösterdiğiniz ilgi için teşekkür ederiz.

"{BAŞLIK}" başlıklı makalenizin editöryal sürecine devam edebilmemiz için, dergimize ait resmi "PedPer Başlık Sayfası" belgesini doldurarak tarafımıza iletmenizi rica ediyoruz.

Söz konusu şablonu dergimizin web sitesinden temin edebilir ya da bu e-postaya yanıt vererek talep edebilirsiniz. Lütfen aşağıda belirtilen alanların eksiksiz ve doğru biçimde doldurulduğundan emin olunuz:

• Makale başlığı (İngilizce ve Türkçe olarak, varsa)
• Tüm yazarların tam adları ve kurumsal bağlantıları
• Sorumlu yazara ait iletişim bilgileri (ad, e-posta, ORCID, adres)
• Yazar katkı beyanları (CRediT taksonomisi)
• Teşekkür ifadeleri (varsa)
• Veri erişilebilirlik beyanı

Lütfen doldurulmuş belgeyi en kısa sürede tarafımıza iletiniz.

İyi çalışmalar dileriz,
Emrah AKMAN
Baş Editör
Pedagogical Perspective
https://pedagogicalperspective.com`
        }
      },

      {
        id: 'eic-12', role: 'eic', stage: 'other',
        title: { en: 'Publication Invitation', tr: 'Makale Yayın Daveti' },
        subject: {
          en: 'Invitation to Submit to Pedagogical Perspective',
          tr: 'Pedagogical Perspective\'e Makale Gönderme Daveti'
        },
        body: {
          en: `Dear Researcher,

I hope this message finds you well. As the Editor-in-Chief of Pedagogical Perspective (PedPer), I am pleased to extend a personal invitation for you to consider submitting your scholarly work to our journal.

We closely follow your contributions to the field and believe that your research would make a meaningful addition to the academic discussions featured in our publication.

Pedagogical Perspective is an international, open-access, peer-reviewed journal publishing high-quality studies across various areas of educational sciences, including:
  • Teacher education and professional development
  • Teaching and learning processes
  • Educational technologies and AI in education
  • Curriculum and instructional design
  • Assessment and educational measurement
  • Interdisciplinary and comparative approaches

Our journal adopts rigorous double-blind review standards and operates in full compliance with COPE guidelines. There are no article processing charges (APCs) — publication is entirely free for authors.

All accepted manuscripts receive complimentary language proofreading (Paperpal by Editage) prior to publication.

You may submit your manuscript via:
  Submission System: https://pedagogicalperspective.com/index.php/pub

Should you have any questions, please feel free to contact me directly.

Pedagogical Perspective Editorial Team
https://pedagogicalperspective.com/index.php/pub/about/editorialTeam

Sincerely,
Emrah AKMAN
Editor-in-Chief
Pedagogical Perspective`,
          tr: `Sayın Araştırmacı,

Umarım bu mesaj sizi iyi bir dönemde bulur. Pedagogical Perspective (PedPer) Baş Editörü olarak, değerli akademik çalışmanızı dergimize göndermeyi düşünmeniz için kişisel bir davet sunmaktan memnuniyet duyarım.

Alana yaptığınız katkıları yakından takip etmekteyiz ve araştırmanızın yayınımızda yer alan akademik tartışmalara anlamlı bir katkı sağlayacağına inanıyoruz.

Pedagogical Perspective; eğitim bilimleri alanında aşağıdakiler de dahil olmak üzere pek çok konuda yüksek kaliteli çalışmalar yayımlayan uluslararası, açık erişimli ve hakemli bir dergidir:
  • Öğretmen eğitimi ve mesleki gelişim
  • Öğretme ve öğrenme süreçleri
  • Eğitim teknolojileri ve eğitimde yapay zeka
  • Program ve öğretim tasarımı
  • Ölçme, değerlendirme ve eğitimde ölçüm
  • Disiplinlerarası ve karşılaştırmalı yaklaşımlar

Dergimiz, titiz çift kör hakem değerlendirme standartlarını benimsemekte ve COPE yönergelerine tam uyum içinde faaliyet göstermektedir. Makale işlem ücreti (APC) bulunmamakta olup yayın yazarlar için tamamen ücretsizdir.

Kabul edilen tüm makaleler, yayın öncesinde ücretsiz dil düzeltmesinden (Paperpal by Editage) yararlanmaktadır.

Makalenizi aşağıdaki bağlantı üzerinden gönderebilirsiniz:
  Başvuru Sistemi: https://pedagogicalperspective.com/index.php/pub

Herhangi bir sorunuz olursa doğrudan benimle iletişime geçmekten çekinmeyiniz.

Pedagogical Perspective Editöryal Ekibi
https://pedagogicalperspective.com/index.php/pub/about/editorialTeam

Saygılarımızla,
Emrah AKMAN
Baş Editör
Pedagogical Perspective`
        }
      },

      {
        id: 'eic-13', role: 'eic', stage: 'other',
        title: { en: 'Special Issue Guest Editor Invitation', tr: 'Özel Sayı Konuk Editör Daveti' },
        subject: {
          en: 'Invitation to Serve as Guest Editor — Pedagogical Perspective Special Issue',
          tr: 'Konuk Editör Daveti — Pedagogical Perspective Özel Sayısı'
        },
        body: {
          en: `Dear Prof. {NAME},

I hope this message finds you well. I am writing to extend a warm invitation to serve as Guest Editor for an upcoming Special Issue of Pedagogical Perspective, an international, peer-reviewed, open-access journal published by Ordu University.

The theme of our forthcoming Special Issue is:
"{SPECIAL ISSUE TITLE}"

Given your distinguished scholarship and influential contributions to the field — particularly your work on {AREA} — we believe your leadership would greatly enrich the academic quality, visibility, and impact of this Special Issue.

As a Guest Editor, your responsibilities would include:
  • Reviewing and approving the call for papers (CFP)
  • Promoting the call within your academic networks
  • Overseeing the peer-review process for submitted manuscripts
  • Making editorial recommendations in line with the journal's ethical guidelines
  • Writing (or co-authoring) a brief editorial introduction for the Special Issue

Our editorial office will support all administrative procedures, and the workload will be shared to ensure an efficient and timely process.

Proposed Timeline (flexible):
  Call for Papers:         {DATE}
  Submission Deadline:     {DATE}
  Review Process:          {DATE}
  Publication:             {DATE}

We would be honoured to collaborate with you on this meaningful scholarly endeavour. If you accept this invitation, we would be delighted to proceed with planning and finalise the official call for papers.

Thank you very much for considering this invitation.

Sincerely,
Emrah AKMAN
Editor-in-Chief
Pedagogical Perspective
editor@pedagogicalperspective.com`,
          tr: `Sayın Prof. {AD},

Umarım bu mesaj sizi iyi bir dönemde bulur. Ordu Üniversitesi bünyesinde yayımlanan uluslararası, hakemli ve açık erişimli bir dergi olan Pedagogical Perspective'in yaklaşan Özel Sayısında Konuk Editör olarak görev almanız için sizi davet etmekten büyük memnuniyet duyarım.

Gelecek Özel Sayımızın teması:
"{ÖZEL SAYI BAŞLIĞI}"

Alana yaptığınız seçkin akademik katkılar — özellikle {ALAN} konusundaki çalışmalarınız — göz önüne alındığında, editörlüğünüzün bu Özel Sayının akademik kalitesini, görünürlüğünü ve etkisini önemli ölçüde zenginleştireceğine inanıyoruz.

Konuk Editör olarak sorumluluklarınız şunları kapsayacaktır:
  • Makale çağrısının (CFP) incelenmesi ve onaylanması
  • Çağrının akademik ağlarınız içinde duyurulması
  • Gönderilen makaleler için hakem değerlendirme sürecinin denetlenmesi
  • Derginin etik kuralları doğrultusunda editöryal önerilerde bulunulması
  • Özel Sayı için kısa bir editöryal giriş yazısının yazılması (veya ortak yazarlığı)

Editöryal ofisimiz tüm idari süreçlerde destek sağlayacak olup iş yükü verimli ve zamanında bir süreç yürütmek adına paylaşılacaktır.

Önerilen Zaman Çizelgesi (esnek):
  Makale Çağrısı:          {TARİH}
  Başvuru Son Tarihi:      {TARİH}
  Hakem Süreci:            {TARİH}
  Yayın:                   {TARİH}

Bu anlamlı akademik çalışmada sizinle iş birliği yapmaktan onur duyarız. Daveti kabul etmeniz halinde planlama sürecine başlamaktan ve resmi makale çağrısını hazırlamaktan büyük memnuniyet duyarız.

Bu daveti değerlendirdiğiniz için çok teşekkür ederim.

Saygılarımızla,
Emrah AKMAN
Baş Editör
Pedagogical Perspective
editor@pedagogicalperspective.com`
        }
      },

      {
        id: 'eic-14', role: 'eic', stage: 'other',
        title: { en: 'Withdrawal Acknowledgment', tr: 'Geri Çekim Onayı' },
        subject: {
          en: 'Manuscript Withdrawal Confirmed — Pedagogical Perspective [Ref: {ID}]',
          tr: 'Makale Geri Çekimi Onaylandı — Pedagogical Perspective [Ref: {ID}]'
        },
        body: {
          en: `Dear Author(s),

We confirm the withdrawal of your manuscript titled "{TITLE}" (Ref: {ID}) from Pedagogical Perspective, as requested.

The manuscript has been formally removed from our editorial system and will not undergo further evaluation. Please note that should you choose to resubmit a revised version at a later date, the manuscript would be treated as a new submission.

We appreciate your interest in Pedagogical Perspective and wish you every success with your research.

Sincerely,
Emrah AKMAN
Editor-in-Chief
Pedagogical Perspective`,
          tr: `Sayın Yazar(lar),

Talebiniz doğrultusunda, "{BAŞLIK}" başlıklı makalenizin (Ref: {ID}) Pedagogical Perspective'den geri çekildiğini teyit ederiz.

Makale, editöryal sistemimizden resmi olarak kaldırılmış olup artık herhangi bir değerlendirme sürecine tabi tutulmayacaktır. İleride revize edilmiş bir versiyonu yeniden göndermek istemeniz halinde, makalenin yeni bir başvuru olarak değerlendirileceğini belirtmek isteriz.

Pedagogical Perspective'e gösterdiğiniz ilgi için teşekkür eder, çalışmalarınızda başarılar dileriz.

Saygılarımızla,
Emrah AKMAN
Baş Editör
Pedagogical Perspective`
        }
      },

      {
        id: 'eic-15', role: 'eic', stage: 'revision',
        title: { en: 'Revision Deadline Extension Approved', tr: 'Revizyon Süre Uzatma Onayı' },
        subject: {
          en: 'Revision Deadline Extended — Pedagogical Perspective [Ref: {ID}]',
          tr: 'Revizyon Süresi Uzatıldı — Pedagogical Perspective [Ref: {ID}]'
        },
        body: {
          en: `Dear Author(s),

Thank you for your message regarding the revision of your manuscript titled "{TITLE}" (Ref: {ID}).

We are pleased to confirm that your request for a deadline extension has been approved. Your new revision deadline is: {NEW DEADLINE}.

Please note that we are unable to accommodate further extensions beyond this date. Should you have any difficulties completing the revision within the extended timeframe, please contact us promptly.

We look forward to receiving your revised manuscript.

Sincerely,
Emrah AKMAN
Editor-in-Chief
Pedagogical Perspective`,
          tr: `Sayın Yazar(lar),

"{BAŞLIK}" başlıklı makalenizin (Ref: {ID}) revizyonuna ilişkin mesajınız için teşekkür ederiz.

Süre uzatma talebinizin onaylandığını bildirmekten memnuniyet duyarız. Yeni revizyon son tarihiniz: {YENİ TARİH}.

Bu tarihten öteye herhangi bir ek uzatma imkânı sunulamayacağını belirtmek isteriz. Uzatılmış süre zarfında revizyonu tamamlamakta güçlük çekmeniz halinde lütfen derhal bizimle iletişime geçiniz.

Revize edilmiş makalenizi bekliyoruz.

Saygılarımızla,
Emrah AKMAN
Baş Editör
Pedagogical Perspective`
        }
      },

      /* ══════════════════════════════════════════════════════
         SECTION EDITOR  (se)
      ══════════════════════════════════════════════════════ */

      {
        id: 'se-01', role: 'se', stage: 'review',
        title: { en: 'Reviewer Invitation', tr: 'Hakem Daveti' },
        subject: {
          en: 'Invitation to Review — Pedagogical Perspective [Ref: {ID}]',
          tr: 'Hakemlik Daveti — Pedagogical Perspective [Ref: {ID}]'
        },
        body: {
          en: `Dear Dr./Prof. {NAME},

I am writing on behalf of the editorial team of Pedagogical Perspective (PedPer) to invite you to review a manuscript that falls within your area of expertise.

Manuscript Reference: {ID}
Manuscript Title:     {TITLE} [blinded]
Field:                {FIELD}
Review Deadline:      {DATE}

Pedagogical Perspective follows a rigorous double-blind peer review process. Your expert evaluation would be of great value to us and to the scholarly community.

If you are able to accept this invitation, please confirm your availability at your earliest convenience. If you are unable to review at this time, we would greatly appreciate any suggestions for alternative reviewers with relevant expertise.

Should you accept, you will receive full access to the manuscript and the review form via our OJS system. We estimate the review to require approximately {X} hours of your time.

Thank you very much for considering this request.

Sincerely,
{SECTION EDITOR NAME}
Section Editor
Pedagogical Perspective`,
          tr: `Sayın Dr./Prof. {AD},

Pedagogical Perspective (PedPer) editöryal ekibi adına, uzmanlık alanınıza giren bir makaleyi değerlendirmeniz için sizi davet etmek amacıyla yazıyorum.

Makale Referansı: {ID}
Makale Başlığı:   {BAŞLIK} [anonimleştirilmiş]
Alan:             {ALAN}
Değerlendirme Son Tarihi: {TARİH}

Pedagogical Perspective titiz bir çift kör hakem değerlendirme sürecini benimsemektedir. Uzman değerlendirmeniz bizim ve akademik topluluk için büyük değer taşıyacaktır.

Bu daveti kabul etmeniz halinde, lütfen müsaitliğinizi en kısa sürede bildirin. Şu an değerlendirme yapamayacak olmanız durumunda, ilgili alanda yetkin alternatif hakem önerilerinizi memnuniyetle değerlendiririz.

Kabul etmeniz durumunda, OJS sistemi aracılığıyla makaleye ve değerlendirme formuna tam erişim sağlanacaktır. Değerlendirmenin yaklaşık {X} saatlik bir çalışma gerektirdiğini tahmin ediyoruz.

Bu talebi değerlendirdiğiniz için çok teşekkür ederim.

Saygılarımızla,
{ALAN EDİTÖRÜ ADI}
Alan Editörü
Pedagogical Perspective`
        }
      },

      {
        id: 'se-02', role: 'se', stage: 'review',
        title: { en: 'Reviewer Reminder', tr: 'Hakem Hatırlatma Mesajı' },
        subject: {
          en: 'Review Reminder — Pedagogical Perspective [Ref: {ID}]',
          tr: 'Değerlendirme Hatırlatması — Pedagogical Perspective [Ref: {ID}]'
        },
        body: {
          en: `Dear Dr./Prof. {NAME},

I hope this message finds you well. I am writing to kindly remind you that the review deadline for the manuscript you agreed to evaluate is approaching.

Manuscript Reference: {ID}
Original Deadline:    {DATE}

If you have already submitted your review, please disregard this message and accept our sincere thanks.

If you are experiencing difficulties completing the review by the stated deadline, please let us know at your earliest convenience so that we may extend the deadline if possible, or make alternative arrangements.

We greatly appreciate your time and expertise.

Sincerely,
{SECTION EDITOR NAME}
Section Editor
Pedagogical Perspective`,
          tr: `Sayın Dr./Prof. {AD},

Umarım bu mesaj sizi iyi bir dönemde bulur. Değerlendirmeyi kabul ettiğiniz makalenin son tarihinin yaklaşmakta olduğunu hatırlatmak amacıyla yazıyorum.

Makale Referansı: {ID}
Belirlenen Son Tarih: {TARİH}

Değerlendirmenizi zaten gönderdiyseniz lütfen bu mesajı görmezden gelin ve içten teşekkürlerimizi kabul ediniz.

Belirlenen son tarihe kadar değerlendirmeyi tamamlamakta güçlük çekiyorsanız, mümkünse süre uzatabilmek ya da alternatif düzenlemeler yapabilmek adına lütfen bize en kısa sürede bilgi veriniz.

Zaman ayırdığınız ve gösterdiğiniz uzmanlık için son derece minnettarız.

Saygılarımızla,
{ALAN EDİTÖRÜ ADI}
Alan Editörü
Pedagogical Perspective`
        }
      },

      {
        id: 'se-03', role: 'se', stage: 'review',
        title: { en: 'Thank You to Reviewer', tr: 'Hakeme Teşekkür Mesajı' },
        subject: {
          en: 'Thank You for Your Review — Pedagogical Perspective [Ref: {ID}]',
          tr: 'Değerlendirmeniz İçin Teşekkür — Pedagogical Perspective [Ref: {ID}]'
        },
        body: {
          en: `Dear Dr./Prof. {NAME},

On behalf of the Editorial Board of Pedagogical Perspective, I would like to express our sincere gratitude for the time and expertise you dedicated to reviewing manuscript {ID}.

Your thoughtful and constructive evaluation is invaluable to us and plays a crucial role in maintaining the quality and integrity of scholarship published in Pedagogical Perspective. We deeply appreciate your contribution to the peer review process.

We hope to count on your expertise again in the future.

With warm regards,
{SECTION EDITOR NAME}
Section Editor
Pedagogical Perspective`,
          tr: `Sayın Dr./Prof. {AD},

Pedagogical Perspective Editör Kurulu adına, {ID} numaralı makaleyi değerlendirmeye ayırdığınız zaman ve gösterdiğiniz uzmanlık için içten teşekkürlerimizi iletmek istiyorum.

Düşünceli ve yapıcı değerlendirmeniz bizim için son derece kıymetlidir ve Pedagogical Perspective'de yayımlanan çalışmaların kalitesini ve bütünlüğünü korumada belirleyici bir rol üstlenmektedir. Hakem değerlendirme sürecine yaptığınız katkı için derin minnettarlığımızı sunarız.

Gelecekte de uzmanlığınızdan yararlanmayı umuyoruz.

Saygı ve takdirlerimizle,
{ALAN EDİTÖRÜ ADI}
Alan Editörü
Pedagogical Perspective`
        }
      },

      /* ══════════════════════════════════════════════════════
         STATISTICS EDITOR  (stat)
      ══════════════════════════════════════════════════════ */

      {
        id: 'stat-01', role: 'stat', stage: 'review',
        title: { en: 'Statistics Review Request (to Author)', tr: 'İstatistik İnceleme Talebi (Yazara)' },
        subject: {
          en: 'Statistical Methods Review — Pedagogical Perspective [Ref: {ID}]',
          tr: 'İstatistiksel Yöntem İncelemesi — Pedagogical Perspective [Ref: {ID}]'
        },
        body: {
          en: `Dear Author(s),

As part of the editorial review process for your manuscript titled "{TITLE}" (Ref: {ID}), the editorial team has identified certain aspects of the statistical analysis that require clarification or revision.

The following points have been raised for your attention:

1. {ISSUE 1}
2. {ISSUE 2}
3. {ISSUE 3}

Please review the concerns above and provide either (a) a written explanation of the statistical choices made, or (b) a revised version of the relevant sections, as appropriate.

If you have any questions regarding specific statistical issues, please do not hesitate to contact us.

Sincerely,
{STATISTICS EDITOR NAME}
Statistics Editor
Pedagogical Perspective`,
          tr: `Sayın Yazar(lar),

"{BAŞLIK}" başlıklı makalenizin (Ref: {ID}) editöryal değerlendirme sürecinin bir parçası olarak, editöryal ekibimiz istatistiksel analizin belirli yönlerinde açıklama veya revizyon gerektiren konular tespit etmiştir.

Dikkatinize sunulan hususlar aşağıda yer almaktadır:

1. {KONU 1}
2. {KONU 2}
3. {KONU 3}

Lütfen yukarıda belirtilen kaygıları inceleyiniz ve uygun şekilde (a) yapılan istatistiksel tercihlerle ilgili yazılı bir açıklama ya da (b) ilgili bölümlerin revize edilmiş versiyonu sununuz.

Belirli istatistiksel konularla ilgili sorularınız olursa lütfen bizimle iletişime geçmekten çekinmeyiniz.

Saygılarımızla,
{İSTATİSTİK EDİTÖRÜ ADI}
İstatistik Editörü
Pedagogical Perspective`
        }
      },

      {
        id: 'stat-02', role: 'stat', stage: 'review',
        title: { en: 'Statistics Approved', tr: 'İstatistik Onayı' },
        subject: {
          en: 'Statistical Review Complete — Pedagogical Perspective [Ref: {ID}]',
          tr: 'İstatistiksel İnceleme Tamamlandı — Pedagogical Perspective [Ref: {ID}]'
        },
        body: {
          en: `Dear Author(s),

We are pleased to inform you that the statistical analysis presented in your manuscript titled "{TITLE}" (Ref: {ID}) has been reviewed and approved by our statistics editor.

The methods, analyses, and reporting of results are considered appropriate and consistent with the study's design and research questions.

No further statistical revisions are required at this stage. The editorial process will continue accordingly.

Thank you for your attention to methodological rigour.

Sincerely,
{STATISTICS EDITOR NAME}
Statistics Editor
Pedagogical Perspective`,
          tr: `Sayın Yazar(lar),

"{BAŞLIK}" başlıklı makalenizde (Ref: {ID}) sunulan istatistiksel analizin istatistik editörümüz tarafından incelendiğini ve onaylandığını bildirmekten memnuniyet duyarız.

Yöntemler, analizler ve sonuçların raporlanması, çalışmanın deseni ve araştırma sorularıyla tutarlı ve uygun bulunmuştur.

Bu aşamada herhangi bir ek istatistiksel revizyon gerekmemektedir. Editöryal süreç buna uygun biçimde devam edecektir.

Yöntemsel titizliğe gösterdiğiniz özen için teşekkür ederiz.

Saygılarımızla,
{İSTATİSTİK EDİTÖRÜ ADI}
İstatistik Editörü
Pedagogical Perspective`
        }
      },

      /* ══════════════════════════════════════════════════════
         LANGUAGE / COPY EDITOR  (lang)
      ══════════════════════════════════════════════════════ */

      {
        id: 'lang-01', role: 'lang', stage: 'copyediting',
        title: { en: 'Copyediting Initiated', tr: 'Dil Düzenleme Başladı' },
        subject: {
          en: 'Copyediting Initiated — Pedagogical Perspective [Ref: {ID}]',
          tr: 'Dil Düzenleme Başlatıldı — Pedagogical Perspective [Ref: {ID}]'
        },
        body: {
          en: `Dear Author(s),

We are writing to inform you that the copyediting stage has been initiated for your manuscript titled "{TITLE}" (Ref: {ID}).

Your manuscript will undergo language and style editing to ensure clarity, consistency, and compliance with the journal's formatting guidelines. Please note that copyediting does not alter the academic content or conclusions of your work.

You will be notified once the copyedited version is ready for your review.

If you need to make any important corrections to the manuscript at this stage, please contact us immediately.

Sincerely,
{LANGUAGE EDITOR NAME}
Language / Copy Editor
Pedagogical Perspective`,
          tr: `Sayın Yazar(lar),

"{BAŞLIK}" başlıklı makaleniz (Ref: {ID}) için dil düzenleme aşamasının başlatıldığını bildirmek amacıyla yazıyoruz.

Makaleniz, netlik, tutarlılık ve derginin biçimlendirme yönergelerine uyum açısından dil ve üslup düzenlemesine tabi tutulacaktır. Dil düzenlemenin çalışmanızın akademik içeriğini veya sonuçlarını etkilemeyeceğini belirtmek isteriz.

Düzenlenmiş versiyon incelemenize hazır olduğunda bilgilendirileceksiniz.

Bu aşamada makalede önemli düzeltmeler yapmanız gerekiyorsa lütfen hemen bizimle iletişime geçiniz.

Saygılarımızla,
{DİL EDİTÖRÜ ADI}
Dil / Kopya Editörü
Pedagogical Perspective`
        }
      },

      {
        id: 'lang-02', role: 'lang', stage: 'copyediting',
        title: { en: 'Author Copyedit Review (Paperpal)', tr: 'Yazara Dil Düzeltme Gönderimi (Paperpal)' },
        subject: {
          en: 'Language Proofread Version Ready for Your Review — Pedagogical Perspective [Ref: {ID}]',
          tr: 'Dil Tashihi Yapılmış Versiyon İncelemenize Hazır — Pedagogical Perspective [Ref: {ID}]'
        },
        body: {
          en: `Dear Author(s),

Attached is the final language-proofread version of your manuscript "{TITLE}" (Ref: {ID}), processed via Paperpal by Editage.

Please carefully review the document and accept, reject, or modify the suggested changes as you see fit. You may also make any additional corrections you consider necessary.

Once you have finalized your review, please upload the updated version under the "Copyediting Discussion" tab in the OJS system, or return it via e-mail.

If you have any questions regarding specific edits, please do not hesitate to reach out.

Kind regards,
{LANGUAGE EDITOR NAME}
Language / Copy Editor
Pedagogical Perspective`,
          tr: `Sayın Yazar(lar),

"{BAŞLIK}" başlıklı makalenizin (Ref: {ID}), Paperpal by Editage aracılığıyla işlemden geçirilmiş son dil tashihi yapılmış versiyonu ekte sunulmaktadır.

Lütfen belgeyi dikkatle inceleyiniz; önerilen değişiklikleri uygun gördüğünüz şekilde kabul edin, reddedin veya düzenleyin. Gerekli gördüğünüz ek düzeltmeleri de yapabilirsiniz.

İncelemenizi tamamladıktan sonra, güncellenmiş versiyonu OJS sistemindeki "Kopya Düzenleme Tartışması" sekmesi altında yükleyiniz ya da e-posta ile iletiniz.

Belirli düzenlemelerle ilgili sorularınız olursa lütfen bizimle iletişime geçmekten çekinmeyiniz.

Saygılarımızla,
{DİL EDİTÖRÜ ADI}
Dil / Kopya Editörü
Pedagogical Perspective`
        }
      },

      {
        id: 'lang-03', role: 'lang', stage: 'copyediting',
        title: { en: 'Copyediting Completed', tr: 'Dil Düzenleme Tamamlandı' },
        subject: {
          en: 'Copyediting Completed — Pedagogical Perspective [Ref: {ID}]',
          tr: 'Dil Düzenleme Tamamlandı — Pedagogical Perspective [Ref: {ID}]'
        },
        body: {
          en: `Dear Author(s),

We are pleased to inform you that the copyediting of your manuscript titled "{TITLE}" (Ref: {ID}) has been completed.

The copyedited version has been forwarded to the layout editor for typesetting. You will be contacted again during the proofreading stage when the typeset version is ready for your final review.

Thank you for your cooperation throughout this stage.

Sincerely,
{LANGUAGE EDITOR NAME}
Language / Copy Editor
Pedagogical Perspective`,
          tr: `Sayın Yazar(lar),

"{BAŞLIK}" başlıklı makalenizin (Ref: {ID}) dil düzenlemesinin tamamlandığını bildirmekten memnuniyet duyarız.

Düzenlenmiş versiyon, dizgi için mizanpaj editörüne iletilmiştir. Son okumanız için typeset versiyonu hazır olduğunda proofreading aşamasında tekrar sizinle iletişime geçilecektir.

Bu aşama boyunca gösterdiğiniz işbirliği için teşekkür ederiz.

Saygılarımızla,
{DİL EDİTÖRÜ ADI}
Dil / Kopya Editörü
Pedagogical Perspective`
        }
      },

      /* ══════════════════════════════════════════════════════
         LAYOUT / TYPESETTER  (layout)
      ══════════════════════════════════════════════════════ */

      {
        id: 'layout-01', role: 'layout', stage: 'layout',
        title: { en: 'Layout in Progress', tr: 'Mizanpaj Devam Ediyor' },
        subject: {
          en: 'Layout Stage Initiated — Pedagogical Perspective [Ref: {ID}]',
          tr: 'Mizanpaj Aşaması Başlatıldı — Pedagogical Perspective [Ref: {ID}]'
        },
        body: {
          en: `Dear Author(s),

We are pleased to inform you that your manuscript titled "{TITLE}" (Ref: {ID}) has been advanced to the layout (typesetting) stage.

Your manuscript is currently being formatted according to the journal's publication template. Once the typeset version is complete, it will be sent to you for a final proofreading review before publication.

No further action is required from you at this stage. We will be in touch shortly.

Sincerely,
{LAYOUT EDITOR NAME}
Layout / Typesetting Editor
Pedagogical Perspective`,
          tr: `Sayın Yazar(lar),

"{BAŞLIK}" başlıklı makalenizin (Ref: {ID}) mizanpaj (dizgi) aşamasına alındığını bildirmekten memnuniyet duyarız.

Makaleniz şu anda derginin yayın şablonuna göre biçimlendirilmektedir. Typeset versiyon tamamlandığında, yayın öncesinde son okuma için tarafınıza iletilecektir.

Bu aşamada sizden ek bir işlem beklenmemektedir. Kısa sürede tekrar iletişime geçeceğiz.

Saygılarımızla,
{MİZANPAJ EDİTÖRÜ ADI}
Mizanpaj / Dizgi Editörü
Pedagogical Perspective`
        }
      },

      {
        id: 'layout-02', role: 'layout', stage: 'proofreading',
        title: { en: 'Galley Proof — Author Final Proofreading', tr: 'Son Okuma (Proofreading) — Yazara Gönderim' },
        subject: {
          en: 'Final Proofreading Required — Pedagogical Perspective [Ref: {ID}]',
          tr: 'Son Okuma Gerekli — Pedagogical Perspective [Ref: {ID}]'
        },
        body: {
          en: `Dear Author(s),

We are pleased to share with you the typeset (layout) version of your article "{TITLE}" (Ref: {ID}) for final proofreading.

At this stage, only limited corrections are permitted, including:
  ✓ Correction of spelling or punctuation errors
  ✓ Minor edits to improve clarity or fluency
  ✓ Adding or removing footnotes and references
  ✓ Ensuring the article type is correctly stated
  ✓ Small-scale corrections that enhance consistency of meaning

Please mark all your changes in a different colour and do not alter the template or overall formatting in any way.

Kindly return the corrected file urgently by replying to this message (or uploading via OJS). If you have no corrections, please confirm by e-mail.

Thank you for your contribution to Pedagogical Perspective. We wish you continued success in your work.

Kind regards,
Emrah AKMAN (Ph.D.)
Editor-in-Chief
Pedagogical Perspective
editor@pedagogicalperspective.com`,
          tr: `Sayın Yazar(lar),


"{BAŞLIK}" başlıklı makalenizin (Ref: {ID}) mizanpajı yapılmış (typeset) son halini son okuma amacıyla ekte sizinle paylaşmaktan memnuniyet duyarız.

Bu aşamada yalnızca aşağıda belirtilen kapsamda düzenlemeler yapılabilir:
  ✓ Yazım ve noktalama hatalarının düzeltilmesi
  ✓ Anlamı bozan veya akıcılığı engelleyen ifadelerin sadeleştirilmesi
  ✓ Dipnot ve kaynakça ekleme/çıkarma
  ✓ Makale türünün doğru biçimde belirtilmesi
  ✓ Küçük çaplı anlam bütünlüğünü artırıcı düzenlemeler

Lütfen yapacağınız tüm değişiklikleri farklı bir renk ile işaretleyiniz ve şablon biçimini hiçbir şekilde değiştirmeyiniz.

Düzeltilmiş dosyayı bu mesaja yanıt olarak (veya OJS aracılığıyla yükleyerek) acilen iletiniz. Düzeltme yapmanıza gerek yoksa lütfen e-posta ile onaylayınız.

Pedagogical Perspective'e yaptığınız katkı için teşekkür eder, çalışmalarınızda başarılar dileriz.

Saygılarımızla,
Emrah AKMAN (Dr.)
Baş Editör
Pedagogical Perspective
editor@pedagogicalperspective.com`
        }
      },

      {
        id: 'layout-03', role: 'layout', stage: 'production',
        title: { en: 'Final Layout Approved', tr: 'Son Mizanpaj Onaylandı' },
        subject: {
          en: 'Article Ready for Publication — Pedagogical Perspective [Ref: {ID}]',
          tr: 'Makale Yayına Hazır — Pedagogical Perspective [Ref: {ID}]'
        },
        body: {
          en: `Dear Author(s),

We are pleased to confirm that the final layout of your article titled "{TITLE}" (Ref: {ID}) has been approved and the article is now ready for publication.

Your article will be published in:
  Volume: {VOLUME} | Issue: {ISSUE} | Year: {YEAR}
  Expected Online Date: {DATE}

Once published, a DOI and permanent link will be assigned to your article. You will receive a publication confirmation with the relevant details.

Thank you for your patience throughout the production process.

Sincerely,
{LAYOUT EDITOR NAME}
Layout / Typesetting Editor
Pedagogical Perspective`,
          tr: `Sayın Yazar(lar),

"{BAŞLIK}" başlıklı makalenizin (Ref: {ID}) son mizanpajının onaylandığını ve makalenin artık yayına hazır olduğunu bildirmekten memnuniyet duyarız.

Makaleniz aşağıdaki sayıda yayımlanacaktır:
  Cilt: {CİLT} | Sayı: {SAYI} | Yıl: {YIL}
  Tahmini Çevrimiçi Yayın Tarihi: {TARİH}

Yayımlandıktan sonra makalenize bir DOI ve kalıcı bağlantı atanacaktır. İlgili ayrıntılarla birlikte bir yayın onay bildirimi alacaksınız.

Üretim süreci boyunca gösterdiğiniz sabır için teşekkür ederiz.

Saygılarımızla,
{MİZANPAJ EDİTÖRÜ ADI}
Mizanpaj / Dizgi Editörü
Pedagogical Perspective`
        }
      },

      /* ══════════════════════════════════════════════════════
         SECRETARY  (sec)
      ══════════════════════════════════════════════════════ */

      {
        id: 'sec-01', role: 'sec', stage: 'desk',
        title: { en: 'Ethics Approval Document Request', tr: 'Etik Onay Belgesi Talebi' },
        subject: {
          en: 'Action Required: Ethics Approval Documentation — Pedagogical Perspective [Ref: {ID}]',
          tr: 'İşlem Gerekli: Etik Onay Belgesi — Pedagogical Perspective [Ref: {ID}]'
        },
        body: {
          en: `Dear Author(s),

As part of the editorial review process for your manuscript titled "{TITLE}" (Ref: {ID}), we note that your study appears to involve human participants and/or sensitive data, requiring formal ethics committee approval.

In line with the ethical standards of Pedagogical Perspective and COPE guidelines, we kindly request that you provide the following:

1. The name and institution of the ethics committee that granted approval
2. The approval reference number
3. A scanned copy or formal confirmation of the ethics approval document

Please submit this documentation at your earliest convenience. Manuscripts involving human participants cannot proceed to peer review without evidence of appropriate ethical oversight.

If your study is exempt from ethics committee review, please provide a brief written explanation of the exemption grounds.

Thank you for your understanding and cooperation.

Sincerely,
Editorial Secretary
Pedagogical Perspective
info@pedagogicalperspective.com`,
          tr: `Sayın Yazar(lar),

"{BAŞLIK}" başlıklı makalenizin (Ref: {ID}) editöryal değerlendirme süreci kapsamında, çalışmanızın insan katılımcıları ve/veya hassas veriler içerdiği ve resmi etik kurul onayı gerektirdiği tespit edilmiştir.

Pedagogical Perspective'in etik standartları ve COPE yönergeleri doğrultusunda aşağıdaki bilgi ve belgeleri sunmanızı rica ederiz:

1. Onayı veren etik kurulun adı ve bağlı bulunduğu kurum
2. Onay referans numarası
3. Etik onay belgesinin taranmış kopyası veya resmi teyidi

Bu belgeleri en kısa sürede iletmenizi rica ederiz. İnsan katılımcıları içeren makaleler, uygun etik denetim kanıtı sunulmaksızın hakem değerlendirmesi aşamasına alınamamaktadır.

Çalışmanız etik kurul incelemesinden muaf ise lütfen muafiyet gerekçesini açıklayan kısa bir yazılı beyan sununuz.

Anlayış ve işbirliğiniz için teşekkür ederiz.

Saygılarımızla,
Editöryal Sekreter
Pedagogical Perspective
info@pedagogicalperspective.com`
        }
      },

      {
        id: 'sec-02', role: 'sec', stage: 'desk',
        title: { en: 'Authorship Statement Request', tr: 'Yazarlık Beyanı Talebi' },
        subject: {
          en: 'Action Required: Authorship Contribution Statement — Pedagogical Perspective [Ref: {ID}]',
          tr: 'İşlem Gerekli: Yazarlık Katkı Beyanı — Pedagogical Perspective [Ref: {ID}]'
        },
        body: {
          en: `Dear Author(s),

As part of the submission requirements for Pedagogical Perspective, we request that you provide a clear statement of each author's contribution to the manuscript titled "{TITLE}" (Ref: {ID}).

Please use the CRediT (Contributor Roles Taxonomy) framework and specify each author's role(s) from the following:

Conceptualization | Data Curation | Formal Analysis | Funding Acquisition | Investigation | Methodology | Project Administration | Resources | Software | Supervision | Validation | Visualization | Writing – Original Draft | Writing – Review & Editing

Example format:
  Author A: Conceptualization, Methodology, Writing – Original Draft
  Author B: Data Curation, Formal Analysis, Visualization
  Author C: Supervision, Writing – Review & Editing

Please provide this information via the attached Title Page form or by replying to this e-mail.

Thank you for your attention to this matter.

Sincerely,
Editorial Secretary
Pedagogical Perspective`,
          tr: `Sayın Yazar(lar),

Pedagogical Perspective'e başvuru gereklilikleri çerçevesinde, "{BAŞLIK}" başlıklı makalenize (Ref: {ID}) her yazarın katkısını açıklayan bir beyan sunmanızı talep ediyoruz.

Lütfen CRediT (Katkı Sahibi Rolleri Taksonomisi) çerçevesini kullanarak her yazarın aşağıdaki rollerden üstlendiğini belirtiniz:

Kavramsallaştırma | Veri Kürasyon | Biçimsel Analiz | Fon Temini | Araştırma | Yöntem | Proje Yönetimi | Kaynaklar | Yazılım | Danışmanlık | Doğrulama | Görselleştirme | Yazım – Özgün Taslak | Yazım – Gözden Geçirme ve Düzenleme

Örnek format:
  Yazar A: Kavramsallaştırma, Yöntem, Yazım – Özgün Taslak
  Yazar B: Veri Kürasyon, Biçimsel Analiz, Görselleştirme
  Yazar C: Danışmanlık, Yazım – Gözden Geçirme ve Düzenleme

Bu bilgileri lütfen ekli Başlık Sayfası formu aracılığıyla veya bu e-postaya yanıt vererek iletiniz.

Bu konudaki ilginiz için teşekkür ederiz.

Saygılarımızla,
Editöryal Sekreter
Pedagogical Perspective`
        }
      },

      {
        id: 'sec-03', role: 'sec', stage: 'production',
        title: { en: 'DOI Assignment Notification', tr: 'DOI Atama Bildirimi' },
        subject: {
          en: 'DOI Assigned — Pedagogical Perspective [Ref: {ID}]',
          tr: 'DOI Atandı — Pedagogical Perspective [Ref: {ID}]'
        },
        body: {
          en: `Dear Author(s),

We are pleased to inform you that a Digital Object Identifier (DOI) has been assigned to your article titled "{TITLE}".

DOI: https://doi.org/{DOI}

Please use this DOI when citing or sharing your article. Note that the DOI link may not be immediately active and may take a short time to resolve.

The article will be officially published in:
  Volume: {VOLUME} | Issue: {ISSUE} | Year: {YEAR}

Thank you for publishing with Pedagogical Perspective.

Sincerely,
Editorial Secretary
Pedagogical Perspective`,
          tr: `Sayın Yazar(lar),

"{BAŞLIK}" başlıklı makalenize Dijital Nesne Tanımlayıcısı (DOI) atandığını bildirmekten memnuniyet duyarız.

DOI: https://doi.org/{DOI}

Lütfen makalenizi alıntılarken veya paylaşırken bu DOI'yi kullanınız. DOI bağlantısının hemen aktif olmayabileceğini ve çözümlenmesinin kısa bir süre alabileceğini belirtmek isteriz.

Makale resmi olarak şu sayıda yayımlanacaktır:
  Cilt: {CİLT} | Sayı: {SAYI} | Yıl: {YIL}

Pedagogical Perspective'de yayın yaptığınız için teşekkür ederiz.

Saygılarımızla,
Editöryal Sekreter
Pedagogical Perspective`
        }
      },

      {
        id: 'sec-04', role: 'sec', stage: 'production',
        title: { en: 'Publication Confirmation', tr: 'Yayın Teyidi' },
        subject: {
          en: 'Your Article is Now Published — Pedagogical Perspective',
          tr: 'Makaleniz Yayımlandı — Pedagogical Perspective'
        },
        body: {
          en: `Dear Author(s),

We are delighted to inform you that your article titled "{TITLE}" has been officially published in Pedagogical Perspective.

Article Details:
  Volume: {VOLUME} | Issue: {ISSUE} | Year: {YEAR}
  Pages:  {PAGES}
  DOI:    https://doi.org/{DOI}
  URL:    {ARTICLE URL}

The article is freely accessible to readers worldwide under a Creative Commons CC BY 4.0 licence. We encourage you to share the article link through your academic networks, institutional repositories, ResearchGate, and social media platforms.

Congratulations on this achievement, and thank you for contributing to Pedagogical Perspective.

Sincerely,
Editorial Secretary
Pedagogical Perspective
https://pedagogicalperspective.com`,
          tr: `Sayın Yazar(lar),

"{BAŞLIK}" başlıklı makalenizin Pedagogical Perspective'de resmi olarak yayımlandığını bildirmekten büyük memnuniyet duyarız.

Makale Bilgileri:
  Cilt: {CİLT} | Sayı: {SAYI} | Yıl: {YIL}
  Sayfalar: {SAYFALAR}
  DOI:      https://doi.org/{DOI}
  URL:      {MAKALE URL}

Makale, Creative Commons CC BY 4.0 lisansı kapsamında dünya genelindeki okuyuculara ücretsiz olarak sunulmaktadır. Makale bağlantısını akademik ağlarınız, kurumsal repozituvarlar, ResearchGate ve sosyal medya platformları aracılığıyla paylaşmanızı öneririz.

Bu başarı için tebriklerimizi sunar ve Pedagogical Perspective'e yaptığınız katkı için teşekkür ederiz.

Saygılarımızla,
Editöryal Sekreter
Pedagogical Perspective
https://pedagogicalperspective.com`
        }
      },

      {
        id: 'sec-05', role: 'sec', stage: 'other',
        title: { en: 'Author Information Update Request', tr: 'Yazar Bilgi Güncelleme Talebi' },
        subject: {
          en: 'Author Information Update Required — Pedagogical Perspective [Ref: {ID}]',
          tr: 'Yazar Bilgisi Güncelleme Gerekli — Pedagogical Perspective [Ref: {ID}]'
        },
        body: {
          en: `Dear Author(s),

During the final preparation of your article titled "{TITLE}" (Ref: {ID}) for publication, we identified an inconsistency or incompleteness in the author information provided.

Please verify and update the following:
☐ Author name(s) — spelling and order
☐ Institutional affiliation(s) — current and accurate
☐ ORCID iD(s) — required for all authors
☐ Corresponding author details — name, e-mail, postal address
☐ Other: ___________________________________

Please provide the corrected information at your earliest convenience so that we may proceed with publication without delay.

Sincerely,
Editorial Secretary
Pedagogical Perspective`,
          tr: `Sayın Yazar(lar),

"{BAŞLIK}" başlıklı makalenizin (Ref: {ID}) yayına son hazırlık aşamasında, sağlanan yazar bilgilerinde bir tutarsızlık veya eksiklik tespit edilmiştir.

Lütfen aşağıdaki bilgileri doğrulayınız ve güncelleyiniz:
☐ Yazar adı/adları — yazım ve sıralama
☐ Kurumsal bağlantı(lar) — güncel ve doğru
☐ ORCID iD(ler) — tüm yazarlar için zorunludur
☐ Sorumlu yazar bilgileri — ad, e-posta, posta adresi
☐ Diğer: ___________________________________

Yayını geciktirmeden sürdürebilmemiz için düzeltilmiş bilgileri en kısa sürede iletmenizi rica ederiz.

Saygılarımızla,
Editöryal Sekreter
Pedagogical Perspective`
        }
      }


      /* ══════════════════════════════════════════════════════
         COPE / SCOPUS / WOS COMPLIANCE — EDITOR-IN-CHIEF
      ══════════════════════════════════════════════════════ */

      {
        id: 'eic-c01', role: 'eic', stage: 'integrity',
        cope: true, scopus: true, wos: true,
        title: { en: 'Similarity Screening — Passed', tr: 'Benzerlik Taraması — Geçti' },
        subject: {
          en: 'Similarity Screening Result — Pedagogical Perspective [Ref: {ID}]',
          tr: 'Benzerlik Taraması Sonucu — Pedagogical Perspective [Ref: {ID}]'
        },
        body: {
          en: `Dear Author(s),

Your manuscript titled "{TITLE}" (Ref: {ID}) has been screened for textual similarity using iThenticate as part of Pedagogical Perspective's standard editorial integrity process.

Similarity Report Summary:
  Overall Similarity Index: {X}%
  Largest Single-Source Match: {Y}%

The similarity level falls within acceptable limits in accordance with the journal's plagiarism and self-plagiarism policy. Your manuscript will now proceed to the next stage of editorial evaluation.

Please note that all manuscripts submitted to Pedagogical Perspective are subject to similarity screening in compliance with COPE guidelines on publication integrity.

If you have any questions regarding this process, please do not hesitate to contact us.

Sincerely,
Emrah AKMAN
Editor-in-Chief
Pedagogical Perspective
editor@pedagogicalperspective.com`,
          tr: `Sayın Yazar(lar),

"{BAŞLIK}" başlıklı makaleniz (Ref: {ID}), Pedagogical Perspective'in standart editöryal bütünlük süreci kapsamında iThenticate kullanılarak metin benzerliği taramasına tabi tutulmuştur.

Benzerlik Raporu Özeti:
  Genel Benzerlik İndeksi: {X}%
  En Yüksek Tek Kaynak Eşleşmesi: {Y}%

Benzerlik oranı, dergimizin intihal ve öz-intihal politikasına uygun olarak kabul edilebilir sınırlar içindedir. Makaleniz, editöryal değerlendirmenin bir sonraki aşamasına alınacaktır.

Pedagogical Perspective'e gönderilen tüm makalelerin, COPE yayın bütünlüğü yönergelerine uygun olarak benzerlik taramasına tabi tutulduğunu bilginize sunarız.

Bu süreçle ilgili sorularınız olması halinde lütfen bizimle iletişime geçiniz.

Saygılarımızla,
Emrah AKMAN
Baş Editör
Pedagogical Perspective
editor@pedagogicalperspective.com`
        }
      },

      {
        id: 'eic-c02', role: 'eic', stage: 'integrity',
        cope: true, scopus: true, wos: true,
        title: { en: 'High Similarity Detected — Author Response Required', tr: 'Yüksek Benzerlik Tespit Edildi — Yazardan Yanıt Bekleniyor' },
        subject: {
          en: 'Similarity Screening Concern — Action Required [Ref: {ID}]',
          tr: 'Benzerlik Taraması Kaygısı — İşlem Gerekli [Ref: {ID}]'
        },
        body: {
          en: `Dear Author(s),

Your manuscript titled "{TITLE}" (Ref: {ID}) has undergone a similarity screening using iThenticate. The results have raised concerns that require your attention before the editorial process can continue.

Similarity Report Summary:
  Overall Similarity Index: {X}%
  Largest Single-Source Match: {Y}%
  Source of concern: {SOURCE}

In accordance with COPE (Committee on Publication Ethics) guidelines on plagiarism and text recycling, manuscripts with similarity levels above our threshold require a written explanation from the authors.

Please provide, within {X} working days, a detailed written response addressing:
1. The origin of the matched text and its relationship to your manuscript.
2. Whether any previously published text has been reproduced — if so, provide full citation details and confirmation that appropriate permissions have been obtained.
3. If the matched source is your own prior work, clarify the extent of overlap and explain how the current submission constitutes a new scholarly contribution.

Failure to provide a satisfactory explanation may result in desk rejection on grounds of plagiarism or duplicate publication, in accordance with COPE flowcharts on suspected plagiarism.

We look forward to your response.

Sincerely,
Emrah AKMAN
Editor-in-Chief
Pedagogical Perspective
editor@pedagogicalperspective.com
COPE Guidelines: https://publicationethics.org`,
          tr: `Sayın Yazar(lar),

"{BAŞLIK}" başlıklı makaleniz (Ref: {ID}), iThenticate kullanılarak benzerlik taramasına tabi tutulmuş; sonuçlar, editöryal sürecin devam edebilmesi için dikkatinizi gerektiren kaygılar ortaya koymuştur.

Benzerlik Raporu Özeti:
  Genel Benzerlik İndeksi: {X}%
  En Yüksek Tek Kaynak Eşleşmesi: {Y}%
  Kaygı kaynağı: {KAYNAK}

İntihal ve metin geri dönüşümüne ilişkin COPE (Yayın Etiği Komitesi) yönergeleri uyarınca, benzerlik düzeyi belirlenen eşiğin üzerinde olan makaleler için yazarlardan yazılı açıklama talep edilmektedir.

Lütfen {X} iş günü içinde aşağıdaki konuları ele alan ayrıntılı yazılı bir yanıt sağlayınız:
1. Eşleşen metnin kaynağı ve makalenizle ilişkisi.
2. Daha önce yayımlanmış bir metnin yeniden kullanılıp kullanılmadığı — kullanıldıysa, tam atıf bilgilerini ve gerekli izinlerin alındığına dair onayı belirtiniz.
3. Eşleşen kaynak kendi önceki çalışmanızsa, çakışmanın kapsamını açıklayınız ve mevcut başvurunun yeni bir akademik katkı oluşturduğunu gösteriniz.

Tatmin edici bir açıklama sunulmaması, COPE intihal şüphesi akış şemalarına uygun olarak intihal veya yinelenen yayın gerekçesiyle ön redde yol açabilir.

Yanıtınızı bekliyoruz.

Saygılarımızla,
Emrah AKMAN
Baş Editör
Pedagogical Perspective
editor@pedagogicalperspective.com
COPE Yönergeleri: https://publicationethics.org`
        }
      },

      {
        id: 'eic-c03', role: 'eic', stage: 'integrity',
        cope: true, scopus: true, wos: true,
        title: { en: 'Generative AI Disclosure Request', tr: 'Üretici Yapay Zeka Açıklama Talebi' },
        subject: {
          en: 'Action Required: Generative AI Use Declaration [Ref: {ID}]',
          tr: 'İşlem Gerekli: Üretici YZ Kullanım Beyanı [Ref: {ID}]'
        },
        body: {
          en: `Dear Author(s),

As part of Pedagogical Perspective's editorial integrity procedures — in full compliance with COPE's position statement on AI tools in scholarly publishing, Elsevier/Wiley/Springer editorial AI policies, and emerging Scopus and Web of Science indexing criteria — we require all authors to complete a declaration regarding the use of generative artificial intelligence (AI) tools in the preparation of their manuscript.

Please respond to the following questions in relation to your manuscript titled "{TITLE}" (Ref: {ID}):

1. Was any generative AI tool (e.g., ChatGPT, Gemini, Claude, Copilot, Grammarly AI, or equivalent) used during the preparation of this manuscript?
   ☐ No — no generative AI tools were used at any stage.
   ☐ Yes — generative AI was used in the following stage(s):
     ☐ Drafting or writing text
     ☐ Editing, paraphrasing, or language improvement
     ☐ Literature search or summarisation
     ☐ Data analysis or interpretation
     ☐ Image, table, or figure generation
     ☐ Other: ___________________________________

2. If yes, please specify the tool(s) used, the purpose, and the extent of use:
   Tool(s): ___________________________________
   Purpose and extent: ___________________________________

3. Please confirm: AI tools may not be listed as authors. All listed authors accept full accountability for the integrity of the work, including any AI-assisted content.
   ☐ Confirmed

This information will be included in the published article's Methods or Acknowledgements section as required by COPE guidelines.

Please return your completed declaration at your earliest convenience.

Sincerely,
Emrah AKMAN
Editor-in-Chief
Pedagogical Perspective
editor@pedagogicalperspective.com
COPE AI Position: https://publicationethics.org/cope-position-statements/ai-author`,
          tr: `Sayın Yazar(lar),

Pedagogical Perspective'in editöryal bütünlük prosedürleri kapsamında — COPE'un akademik yayıncılıkta yapay zeka araçlarına ilişkin tutum belgesi, Elsevier/Wiley/Springer editöryal YZ politikaları ve Scopus ile Web of Science endeksleme kriterlerine tam uyum çerçevesinde — tüm yazarların makalelerinin hazırlanmasında üretici yapay zeka (YZ) araçlarının kullanımına ilişkin bir beyan tamamlaması zorunludur.

Lütfen "{BAŞLIK}" başlıklı makaleniz (Ref: {ID}) ile ilgili aşağıdaki soruları yanıtlayınız:

1. Bu makalenin hazırlanmasında herhangi bir üretici YZ aracı (ör. ChatGPT, Gemini, Claude, Copilot, Grammarly AI veya eşdeğeri) kullanıldı mı?
   ☐ Hayır — hiçbir aşamada üretici YZ aracı kullanılmadı.
   ☐ Evet — üretici YZ aşağıdaki aşama(larda) kullanıldı:
     ☐ Metin taslağı oluşturma veya yazım
     ☐ Düzenleme, yeniden ifade etme veya dil geliştirme
     ☐ Literatür taraması veya özetleme
     ☐ Veri analizi veya yorumlama
     ☐ Görsel, tablo veya şekil oluşturma
     ☐ Diğer: ___________________________________

2. Evet ise lütfen kullanılan araçları, amacı ve kullanım kapsamını belirtiniz:
   Araç(lar): ___________________________________
   Amaç ve kapsam: ___________________________________

3. Lütfen onaylayınız: YZ araçları yazar olarak listelenemez. Tüm listelenen yazarlar, YZ destekli içerik dahil olmak üzere çalışmanın bütünlüğünden tam sorumluluk kabul eder.
   ☐ Onaylandı

Bu bilgiler, COPE yönergelerinin gerektirdiği şekilde yayımlanan makalenin Yöntem veya Teşekkür bölümüne eklenecektir.

Lütfen doldurulmuş beyanınızı en kısa sürede iletiniz.

Saygılarımızla,
Emrah AKMAN
Baş Editör
Pedagogical Perspective
editor@pedagogicalperspective.com
COPE YZ Tutum Belgesi: https://publicationethics.org/cope-position-statements/ai-author`
        }
      },

      {
        id: 'eic-c04', role: 'eic', stage: 'integrity',
        cope: true,
        title: { en: 'Duplicate Submission / Prior Publication Investigation', tr: 'Yinelenen Başvuru / Önceki Yayın Soruşturması' },
        subject: {
          en: 'Integrity Investigation — Duplicate Submission Concern [Ref: {ID}]',
          tr: 'Bütünlük Soruşturması — Yinelenen Başvuru Kaygısı [Ref: {ID}]'
        },
        body: {
          en: `Dear Author(s),

It has come to our attention that your manuscript titled "{TITLE}" (Ref: {ID}) may have been simultaneously submitted to another journal and/or may substantially overlap with a previously published work.

Specifically, our editorial team has identified the following:
{DESCRIPTION OF CONCERN}

In accordance with COPE guidelines on duplicate submission and redundant publication, simultaneous submission to multiple journals and the republication of previously published content without appropriate disclosure are considered serious ethical violations.

We are therefore writing to formally request your written response to the following:

1. Is this manuscript currently under review at any other journal? Please confirm in writing.
2. Does this manuscript substantially overlap with any previously published work? If so, provide full bibliographic details.
3. If there is partial overlap, please explain the degree of novelty and the new scholarly contribution of the current submission.

Please provide your response within {X} working days. Failure to respond, or an unsatisfactory response, may result in immediate rejection and, if appropriate, notification of the author's institution in accordance with COPE procedures.

We appreciate your prompt attention to this matter.

Sincerely,
Emrah AKMAN
Editor-in-Chief
Pedagogical Perspective
editor@pedagogicalperspective.com
COPE: https://publicationethics.org`,
          tr: `Sayın Yazar(lar),

"{BAŞLIK}" başlıklı makalenizin (Ref: {ID}) başka bir dergiye aynı anda gönderilmiş olabileceği ve/veya daha önce yayımlanmış bir çalışmayla önemli ölçüde örtüştüğü dikkatimizi çekmiştir.

Editöryal ekibimiz özellikle aşağıdaki durumu tespit etmiştir:
{KAYGININ AÇIKLAMASI}

COPE'un yinelenen başvuru ve artık yayın konusundaki yönergelerine uygun olarak, birden fazla dergiye eş zamanlı başvuru ve önceden yayımlanmış içeriğin uygun açıklama yapılmaksızın yeniden yayımlanması ciddi etik ihlaller olarak değerlendirilmektedir.

Bu nedenle, aşağıdaki konularda yazılı yanıtınızı resmi olarak talep etmek amacıyla yazıyoruz:

1. Bu makale hâlihazırda başka bir dergide değerlendirme sürecinde mi? Lütfen yazılı olarak onaylayınız.
2. Bu makale, daha önce yayımlanmış herhangi bir çalışmayla önemli ölçüde örtüşüyor mu? Eğer öyleseyse, tam kaynakça bilgilerini sağlayınız.
3. Kısmi bir örtüşme varsa, mevcut başvurunun özgünlük derecesini ve yeni akademik katkısını açıklayınız.

Lütfen {X} iş günü içinde yanıtınızı iletiniz. Yanıt verilmemesi veya yetersiz bir yanıt, derhal redde ve COPE prosedürleri uyarınca uygun görüldüğünde yazarın kurumuna bildirimde bulunulmasına yol açabilir.

Bu konuya gösterdiğiniz hızlı ilgi için teşekkür ederiz.

Saygılarımızla,
Emrah AKMAN
Baş Editör
Pedagogical Perspective
editor@pedagogicalperspective.com
COPE: https://publicationethics.org`
        }
      },

      {
        id: 'eic-c05', role: 'eic', stage: 'desk',
        cope: true,
        title: { en: 'Authorship Change Request (Post-Submission)', tr: 'Yazarlık Değişikliği Talebi (Başvuru Sonrası)' },
        subject: {
          en: 'Authorship Change Request — Pedagogical Perspective [Ref: {ID}]',
          tr: 'Yazarlık Değişikliği Talebi — Pedagogical Perspective [Ref: {ID}]'
        },
        body: {
          en: `Dear Author(s),

We have received a request to modify the authorship of your manuscript titled "{TITLE}" (Ref: {ID}). The requested change is as follows:
{DESCRIPTION: e.g. addition / removal / reordering of author(s)}

In accordance with COPE guidelines on authorship and contributorship, any post-submission change to authorship requires:

1. A written request signed (or e-mail confirmed) by ALL currently listed authors, explicitly approving the change.
2. A signed statement from the author to be added (if applicable) confirming their agreement and declaring that they meet the ICMJE authorship criteria:
   • Substantial contributions to conception, design, data acquisition, analysis, or interpretation;
   • Drafting or critically revising the work for intellectual content;
   • Final approval of the version to be published;
   • Agreement to be accountable for all aspects of the work.
3. If an author is to be removed, a signed statement from that individual confirming their agreement to removal.

Please provide the required documentation within {X} working days. Authorship changes cannot be processed without the consent of all parties.

We will proceed once the documentation is complete.

Sincerely,
Emrah AKMAN
Editor-in-Chief
Pedagogical Perspective
editor@pedagogicalperspective.com`,
          tr: `Sayın Yazar(lar),

"{BAŞLIK}" başlıklı makalenizin (Ref: {ID}) yazarlığında değişiklik yapılması yönünde bir talep aldık. Talep edilen değişiklik aşağıdaki gibidir:
{AÇIKLAMA: ör. yazar eklenmesi / çıkarılması / sıralanmasının değiştirilmesi}

COPE'un yazarlık ve katkı sahipliğine ilişkin yönergeleri uyarınca, başvuru sonrası yapılacak herhangi bir yazarlık değişikliği şunları gerektirmektedir:

1. Hâlihazırda listede yer alan TÜM yazarlar tarafından imzalanmış (veya e-posta ile onaylanmış), değişikliği açıkça onaylayan yazılı bir talep.
2. Eklenmesi önerilen yazardan (varsa) ICMJE yazarlık kriterlerini karşıladığını beyan eden ve bu kriterlere uyum sağladığını onaylayan imzalı bir beyan:
   • Kavramlaştırma, tasarım, veri toplama, analiz veya yorumlama konusunda önemli katkılar;
   • Çalışmanın entelektüel içerik açısından taslağının oluşturulması veya eleştirel olarak gözden geçirilmesi;
   • Yayımlanacak versiyonun nihai onayı;
   • Çalışmanın tüm yönlerinden hesap verebilir olma taahhüdü.
3. Listeden çıkarılacak bir yazar varsa, o kişinin çıkarılmayı kabul ettiğini onaylayan imzalı bir beyan.

Lütfen gerekli belgeleri {X} iş günü içinde sağlayınız. Yazarlık değişiklikleri, tüm tarafların onayı alınmadan işleme konulamaz.

Belgeler tamamlandığında süreci devam ettireceğiz.

Saygılarımızla,
Emrah AKMAN
Baş Editör
Pedagogical Perspective
editor@pedagogicalperspective.com`
        }
      },

      {
        id: 'eic-c06', role: 'eic', stage: 'postpub',
        cope: true, scopus: true, wos: true,
        title: { en: 'Post-Publication Correction Request', tr: 'Yayın Sonrası Düzeltme Talebi' },
        subject: {
          en: 'Published Article Correction — Pedagogical Perspective [DOI: {DOI}]',
          tr: 'Yayımlanan Makale Düzeltmesi — Pedagogical Perspective [DOI: {DOI}]'
        },
        body: {
          en: `Dear Author(s),

We are writing regarding your article titled "{TITLE}", published in Pedagogical Perspective (Vol. {V}, No. {N}, {YEAR}; DOI: {DOI}).

An error has been identified in the published version of your article:

Nature of error:    {DESCRIPTION}
Location:           {SECTION / PAGE / TABLE / FIGURE}
Original text:      "{ORIGINAL}"
Corrected text:     "{CORRECTED}"
Impact on findings: {e.g. does not affect conclusions / affects Table 3 results}

In accordance with COPE guidelines on corrections and retractions, Pedagogical Perspective will issue a formal Correction Notice (Erratum if the error originates with the journal; Corrigendum if with the authors). The correction will be:
  • Published as a separate, citable record linked to the original article
  • Indexed alongside the original article in all relevant databases (Scopus, EBSCO, Google Scholar, Crossref)
  • Permanently associated with the original DOI

Please confirm the above correction details are accurate, or provide any amendments, within {X} working days.

Sincerely,
Emrah AKMAN
Editor-in-Chief
Pedagogical Perspective
editor@pedagogicalperspective.com
COPE Retraction Guidelines: https://publicationethics.org/retraction-guidelines`,
          tr: `Sayın Yazar(lar),

Pedagogical Perspective'de yayımlanan "{BAŞLIK}" başlıklı makaleniz (Cilt {C}, Sayı {S}, {YIL}; DOI: {DOI}) ile ilgili yazıyoruz.

Makalenizin yayımlanan versiyonunda bir hata tespit edilmiştir:

Hatanın niteliği:   {AÇIKLAMA}
Konumu:             {BÖLÜM / SAYFA / TABLO / ŞEKİL}
Özgün metin:        "{ÖZGÜN}"
Düzeltilmiş metin:  "{DÜZELTİLMİŞ}"
Bulgulara etkisi:   {ör. sonuçları etkilemez / Tablo 3 sonuçlarını etkiler}

COPE düzeltme ve geri çekme yönergelerine uygun olarak Pedagogical Perspective resmi bir Düzeltme Bildirimi yayımlayacaktır (hata dergiden kaynaklanıyorsa Erratum; yazarlardan kaynaklanıyorsa Corrigendum). Düzeltme:
  • Özgün makaleyle ilişkilendirilmiş ayrı, atıflanabilir bir kayıt olarak yayımlanacak
  • Tüm ilgili veri tabanlarında (Scopus, EBSCO, Google Scholar, Crossref) özgün makaleyle birlikte endekslenecek
  • Özgün DOI ile kalıcı olarak ilişkilendirilecektir

Lütfen yukarıdaki düzeltme ayrıntılarının doğru olduğunu onaylayınız veya {X} iş günü içinde gerekli değişiklikleri bildiriniz.

Saygılarımızla,
Emrah AKMAN
Baş Editör
Pedagogical Perspective
editor@pedagogicalperspective.com
COPE Geri Çekme Yönergeleri: https://publicationethics.org/retraction-guidelines`
        }
      },

      {
        id: 'eic-c07', role: 'eic', stage: 'postpub',
        cope: true,
        title: { en: 'Expression of Concern', tr: 'Endişe İfadesi (Expression of Concern)' },
        subject: {
          en: 'Expression of Concern Issued — Pedagogical Perspective [DOI: {DOI}]',
          tr: 'Endişe İfadesi Yayımlandı — Pedagogical Perspective [DOI: {DOI}]'
        },
        body: {
          en: `Dear Author(s),

We are writing to inform you that the editorial board of Pedagogical Perspective has decided to issue an Expression of Concern in relation to your article titled "{TITLE}" (DOI: {DOI}).

This decision has been made in accordance with COPE guidelines on Expressions of Concern, in response to the following:
{DESCRIPTION OF CONCERN: e.g. ongoing investigation into data integrity / unresolved authorship dispute / pending institutional inquiry}

An Expression of Concern is not a retraction. It indicates that the editors have reasonable grounds to believe that the article may require further scrutiny, but that a definitive conclusion has not yet been reached. The notice will be published as a separate, indexed record linked to the original article.

We wish to inform you that:
1. This notice does not predetermine any final editorial decision.
2. You are invited to respond to the concerns raised within {X} working days.
3. We are committed to following COPE's due process and reaching a fair, evidence-based conclusion.

A copy of the Expression of Concern text is provided below for your reference:
---
{EXPRESSION OF CONCERN TEXT}
---

We encourage your cooperation in resolving this matter promptly.

Sincerely,
Emrah AKMAN
Editor-in-Chief
Pedagogical Perspective
editor@pedagogicalperspective.com`,
          tr: `Sayın Yazar(lar),

Pedagogical Perspective Editör Kurulu'nun "{BAŞLIK}" başlıklı makalenizle (DOI: {DOI}) ilgili olarak bir Endişe İfadesi (Expression of Concern) yayımlanmasına karar verdiğini bildirmek amacıyla yazıyoruz.

Bu karar, COPE'un Endişe İfadesine ilişkin yönergeleri doğrultusunda, aşağıdaki duruma yanıt olarak alınmıştır:
{KAYGININ AÇIKLAMASI: ör. veri bütünlüğüne ilişkin devam eden soruşturma / çözüme kavuşturulmamış yazarlık anlaşmazlığı / bekleyen kurumsal soruşturma}

Endişe İfadesi bir geri çekme değildir. Editörlerin, makalenin daha fazla inceleme gerektiriyor olabileceğine dair makul gerekçelere sahip olduğunu, ancak henüz kesin bir sonuca ulaşılmadığını göstermektedir. Bildirim, özgün makaleyle ilişkilendirilmiş ayrı, endekslenmiş bir kayıt olarak yayımlanacaktır.

Aşağıdaki hususları bilginize sunmak isteriz:
1. Bu bildirim herhangi bir nihai editöryal kararı peşinen belirlemez.
2. Dile getirilen kaygılara {X} iş günü içinde yanıt vermenize olanak tanınmaktadır.
3. COPE'un hukuka uygun sürecini takip etmeye ve adil, kanıta dayalı bir sonuca ulaşmaya kararlıyız.

Endişe İfadesi metninin bir kopyası referans olması amacıyla aşağıda sunulmaktadır:
---
{ENDİŞE İFADESİ METNİ}
---

Bu konuyu hızlı biçimde çözüme kavuşturmak için işbirliğinizi öneririz.

Saygılarımızla,
Emrah AKMAN
Baş Editör
Pedagogical Perspective
editor@pedagogicalperspective.com`
        }
      },

      {
        id: 'eic-c08', role: 'eic', stage: 'postpub',
        cope: true, scopus: true, wos: true,
        title: { en: 'Retraction Notice to Author', tr: 'Geri Çekme Bildirimi (Yazara)' },
        subject: {
          en: 'Article Retraction — Pedagogical Perspective [DOI: {DOI}]',
          tr: 'Makale Geri Çekme — Pedagogical Perspective [DOI: {DOI}]'
        },
        body: {
          en: `Dear Author(s),

Following a thorough investigation conducted in accordance with COPE Retraction Guidelines, the Editorial Board of Pedagogical Perspective has made the decision to retract your article titled "{TITLE}" (Vol. {V}, No. {N}, {YEAR}; DOI: {DOI}).

Grounds for retraction:
{DESCRIPTION: e.g. fabricated/falsified data / confirmed duplicate publication / undisclosed authorship conflict / major unreliable findings}

As required by COPE guidelines, the retraction will be:
  • Published as a formally indexed Retraction Notice, linked to and citing the original article
  • Clearly marked on the original article page with the label "RETRACTED"
  • Retained in the journal archive (the original article will not be removed, but will be watermarked as retracted)
  • Reported to all relevant indexing databases including Scopus, Web of Science, EBSCO, and Crossref
  • The DOI of the original article will continue to resolve to the retracted version

You have the right to respond to this decision. Any rebuttal must be submitted in writing within {X} working days and will be reviewed by the editorial board.

A copy of the Retraction Notice is provided below:
---
{RETRACTION NOTICE TEXT}
---

Sincerely,
Emrah AKMAN
Editor-in-Chief
Pedagogical Perspective
editor@pedagogicalperspective.com
COPE Retraction Guidelines: https://publicationethics.org/retraction-guidelines`,
          tr: `Sayın Yazar(lar),

COPE Geri Çekme Yönergeleri doğrultusunda yürütülen kapsamlı bir soruşturmanın ardından, Pedagogical Perspective Editör Kurulu "{BAŞLIK}" başlıklı makalenizin (Cilt {C}, Sayı {S}, {YIL}; DOI: {DOI}) geri çekilmesine karar vermiştir.

Geri çekme gerekçesi:
{AÇIKLAMA: ör. uydurulmuş/tahrif edilmiş veri / teyit edilmiş yinelenen yayın / açıklanmamış yazarlık çatışması / temel güvenilmez bulgular}

COPE yönergeleri gereğince, geri çekme işlemi şu şekilde gerçekleştirilecektir:
  • Resmi olarak endekslenmiş bir Geri Çekme Bildirimi olarak, özgün makaleyle ilişkilendirilmiş ve ona atıf yapılarak yayımlanacak
  • Özgün makale sayfasında "GERİ ÇEKİLDİ" etiketi ile açıkça işaretlenecek
  • Dergi arşivinde muhafaza edilecek (özgün makale kaldırılmayacak, ancak geri çekilmiş damgası vurulacaktır)
  • Scopus, Web of Science, EBSCO ve Crossref dahil tüm ilgili endeksleme veri tabanlarına bildirilecek
  • Özgün makalenin DOI'si geri çekilmiş versiyona yönlendirmeye devam edecektir

Bu karara itiraz hakkınız bulunmaktadır. İtirazlar, {X} iş günü içinde yazılı olarak sunulmalı ve editörler kurulu tarafından değerlendirilecektir.

Geri Çekme Bildirimi metni aşağıda sunulmaktadır:
---
{GERİ ÇEKME BİLDİRİMİ METNİ}
---

Saygılarımızla,
Emrah AKMAN
Baş Editör
Pedagogical Perspective
editor@pedagogicalperspective.com
COPE Geri Çekme Yönergeleri: https://publicationethics.org/retraction-guidelines`
        }
      },

      {
        id: 'eic-c09', role: 'eic', stage: 'desk',
        cope: true, scopus: true, wos: true,
        title: { en: 'Metadata & Abstract Quality Check', tr: 'Üst Veri ve Özet Kalite Kontrolü' },
        subject: {
          en: 'Action Required: Metadata & Abstract Revision [Ref: {ID}]',
          tr: 'İşlem Gerekli: Üst Veri ve Özet Revizyonu [Ref: {ID}]'
        },
        body: {
          en: `Dear Author(s),

As part of Pedagogical Perspective's commitment to meeting Scopus and Web of Science (ESCI/SSCI) indexing standards, all manuscripts undergo a metadata quality review prior to peer review.

Your manuscript titled "{TITLE}" (Ref: {ID}) requires revision in the following areas:

☐ Abstract does not meet the 150–250 word range required for indexing databases.
☐ Abstract lacks a structured format: Background / Aim / Method / Findings / Conclusion.
☐ Keywords are insufficient (minimum 5 required) or too broad/narrow for database indexing.
☐ Keywords include terms already in the title (redundant for search indexing).
☐ English abstract contains language errors that may impede database indexing.
☐ Turkish abstract (Türkçe özet) is missing or inconsistent with the English version.
☐ Author ORCID iD(s) are missing or unverified.
☐ Other: ___________________________________

Please address all flagged items and resubmit the revised title page and abstract within {X} working days.

High-quality, indexable metadata is essential for maximising the discoverability and citation potential of your article.

Sincerely,
Emrah AKMAN
Editor-in-Chief
Pedagogical Perspective
editor@pedagogicalperspective.com`,
          tr: `Sayın Yazar(lar),

Pedagogical Perspective'in Scopus ve Web of Science (ESCI/SSCI) endeksleme standartlarını karşılama taahhüdü kapsamında, tüm makaleler hakem değerlendirmesinden önce bir üst veri kalite incelemesine tabi tutulmaktadır.

"{BAŞLIK}" başlıklı makaleniz (Ref: {ID}), aşağıdaki alanlarda revizyon gerektirmektedir:

☐ Özet, endeksleme veri tabanları için gereken 150–250 kelime aralığını karşılamamaktadır.
☐ Özet, yapılandırılmış bir biçimden yoksundur: Arka Plan / Amaç / Yöntem / Bulgular / Sonuç.
☐ Anahtar kelimeler yetersiz (en az 5 gereklidir) ya da veri tabanı endeksleme için çok geniş/dar kapsamlıdır.
☐ Anahtar kelimeler başlıkta zaten yer alan ifadeler içermektedir (arama endekslemesi için gereksizdir).
☐ İngilizce özet, veri tabanı endekslemesini engelleyebilecek dil hataları içermektedir.
☐ Türkçe özet eksik veya İngilizce versiyonla tutarsızdır.
☐ Yazar ORCID iD'leri eksik veya doğrulanmamıştır.
☐ Diğer: ___________________________________

Lütfen işaretlenen tüm maddeleri ele alınız ve revize edilmiş başlık sayfası ile özeti {X} iş günü içinde yeniden gönderiniz.

Yüksek kaliteli, endekslenebilir üst veriler, makalenizin keşfedilebilirliğini ve atıf potansiyelini en üst düzeye taşımak açısından büyük önem taşımaktadır.

Saygılarımızla,
Emrah AKMAN
Baş Editör
Pedagogical Perspective
editor@pedagogicalperspective.com`
        }
      },

      /* ══════════════════════════════════════════════════════
         COPE / SCOPUS / WOS — SECTION EDITOR
      ══════════════════════════════════════════════════════ */

      {
        id: 'se-c01', role: 'se', stage: 'review',
        cope: true,
        title: { en: 'Reviewer Conflict of Interest Declaration Request', tr: 'Hakem Çıkar Çatışması Beyanı Talebi' },
        subject: {
          en: 'Conflict of Interest Declaration Required — Reviewer [Ref: {ID}]',
          tr: 'Çıkar Çatışması Beyanı Gerekli — Hakem [Ref: {ID}]'
        },
        body: {
          en: `Dear Dr./Prof. {NAME},

Thank you for agreeing to review the manuscript assigned to you (Ref: {ID}) for Pedagogical Perspective.

Before you begin the review, in accordance with COPE ethical guidelines and our journal's peer review policy, we kindly ask you to complete a brief conflict of interest declaration.

Please confirm whether any of the following applies:

☐ I have no conflict of interest with the authors, institution, or content of this manuscript.
☐ I have a potential conflict of interest (please specify below).

Potential conflicts of interest include, but are not limited to:
  — Current or recent collaboration with any of the authors (within the past 3 years)
  — Personal or professional relationship that may influence objectivity
  — Financial interest in the subject matter
  — Prior knowledge of the manuscript (e.g. reviewed for another journal)
  — Competitive relationship with the authors' institution

If a conflict of interest exists, please notify us immediately so that we may assign an alternative reviewer. Disclosing a potential conflict will not reflect negatively on you and is consistent with COPE best practice.

Details (if applicable): ___________________________________

Please confirm your declaration by replying to this message.

Thank you for your continued support of Pedagogical Perspective's peer review process.

Sincerely,
{SECTION EDITOR NAME}
Section Editor
Pedagogical Perspective
info@pedagogicalperspective.com`,
          tr: `Sayın Dr./Prof. {AD},

Pedagogical Perspective adına tarafınıza atanan makaleyi (Ref: {ID}) değerlendirmeyi kabul ettiğiniz için teşekkür ederiz.

Değerlendirmeye başlamadan önce, COPE etik yönergeleri ve dergimizin hakem değerlendirme politikası doğrultusunda, kısa bir çıkar çatışması beyanı doldurmanızı rica ediyoruz.

Lütfen aşağıdakilerden herhangi birinin geçerli olup olmadığını onaylayınız:

☐ Bu makaleyle ilgili yazarlar, kurum veya içerik açısından herhangi bir çıkar çatışmam bulunmamaktadır.
☐ Olası bir çıkar çatışmam mevcuttur (lütfen aşağıda belirtiniz).

Olası çıkar çatışmaları şunları kapsar, ancak bunlarla sınırlı değildir:
  — Yazarlardan herhangi biriyle mevcut veya yakın dönemdeki işbirliği (son 3 yıl içinde)
  — Tarafsızlığı etkileyebilecek kişisel veya mesleki ilişki
  — Konu materyalinde finansal çıkar
  — Makaleyle ilgili önceki bilgi (ör. başka bir dergi için değerlendirme yapılmış olması)
  — Yazarların kurumlarıyla rekabetçi ilişki

Bir çıkar çatışması mevcutsa, alternatif bir hakem atayabilmemiz için lütfen bizi derhal bilgilendiriniz. Olası bir çıkar çatışmasını beyan etmek sizin hakkınızda olumsuz bir izlenim yaratmaz ve COPE en iyi uygulamalarıyla örtüşmektedir.

Ayrıntılar (geçerliyse): ___________________________________

Lütfen bu mesajı yanıtlayarak beyanınızı onaylayınız.

Pedagogical Perspective'in hakem değerlendirme sürecine verdiğiniz süregelen destek için teşekkür ederiz.

Saygılarımızla,
{ALAN EDİTÖRÜ ADI}
Alan Editörü
Pedagogical Perspective
info@pedagogicalperspective.com`
        }
      },

      {
        id: 'se-c02', role: 'se', stage: 'review',
        cope: true, scopus: true,
        title: { en: 'Structured Review Form Guidance', tr: 'Yapılandırılmış Değerlendirme Formu Rehberi' },
        subject: {
          en: 'Peer Review Guidelines & Form — Pedagogical Perspective [Ref: {ID}]',
          tr: 'Hakem Değerlendirme Yönergeleri ve Formu — Pedagogical Perspective [Ref: {ID}]'
        },
        body: {
          en: `Dear Dr./Prof. {NAME},

Thank you for agreeing to review manuscript {ID} for Pedagogical Perspective. To ensure a rigorous, consistent, and COPE-compliant evaluation, please use the structured review criteria below.

REVIEW FRAMEWORK — Pedagogical Perspective

A. Relevance & Scope (1–5)
   Is the manuscript within the scope of PedPer? Does it address a meaningful research gap?

B. Originality & Contribution (1–5)
   Does the manuscript make a genuine scholarly contribution? Is the study design sufficiently novel?

C. Theoretical / Conceptual Framework (1–5)
   Is the literature review comprehensive and up to date? Is the theoretical basis sound?

D. Methodology (1–5)
   Are the research design, sampling, data collection and analysis appropriate and clearly described?

E. Results & Discussion (1–5)
   Are findings clearly presented? Is the discussion grounded in evidence? Are limitations acknowledged?

F. Ethical Compliance (Yes / No / N/A)
   Ethics approval? Informed consent? Conflict of interest declared? AI use disclosed?

G. Language & Presentation (1–5)
   Is the manuscript clearly written? Are figures/tables adequate?

Overall Recommendation:
  ☐ Accept as is
  ☐ Minor revision
  ☐ Major revision
  ☐ Reject

Confidential comments to the editor (not shared with authors): ___________

Please complete your review by: {DATE}

Sincerely,
{SECTION EDITOR NAME}
Section Editor
Pedagogical Perspective
info@pedagogicalperspective.com`,
          tr: `Sayın Dr./Prof. {AD},

Pedagogical Perspective adına {ID} numaralı makaleyi değerlendirmeyi kabul ettiğiniz için teşekkür ederiz. Titiz, tutarlı ve COPE uyumlu bir değerlendirme sağlamak amacıyla lütfen aşağıdaki yapılandırılmış değerlendirme kriterlerini kullanınız.

DEĞERLENDİRME ÇERÇEVESİ — Pedagogical Perspective

A. İlgi Alanı ve Kapsam (1–5)
   Makale PedPer'in kapsamında mı? Anlamlı bir araştırma boşluğunu ele alıyor mu?

B. Özgünlük ve Katkı (1–5)
   Makale gerçek bir akademik katkı sunuyor mu? Çalışma tasarımı yeterince özgün mü?

C. Kuramsal / Kavramsal Çerçeve (1–5)
   Literatür taraması kapsamlı ve güncel mi? Kuramsal temel sağlam mı?

D. Yöntem (1–5)
   Araştırma deseni, örnekleme, veri toplama ve analiz uygun ve açık biçimde tanımlanmış mı?

E. Bulgular ve Tartışma (1–5)
   Bulgular açıkça sunulmuş mu? Tartışma kanıta dayalı mı? Sınırlılıklar kabul edilmiş mi?

F. Etik Uyumluluk (Evet / Hayır / Geçerli değil)
   Etik onay? Bilgilendirilmiş onam? Çıkar çatışması beyan edilmiş mi? YZ kullanımı açıklanmış mı?

G. Dil ve Sunum (1–5)
   Makale açık biçimde yazılmış mı? Şekil/tablolar yeterli mi?

Genel Öneri:
  ☐ Olduğu gibi kabul et
  ☐ Minör revizyon
  ☐ Majör revizyon
  ☐ Reddet

Editöre gizli yorumlar (yazarlarla paylaşılmaz): ___________

Lütfen değerlendirmenizi şu tarihe kadar tamamlayınız: {TARİH}

Saygılarımızla,
{ALAN EDİTÖRÜ ADI}
Alan Editörü
Pedagogical Perspective
info@pedagogicalperspective.com`
        }
      },

      /* ══════════════════════════════════════════════════════
         COPE / SCOPUS / WOS — SECRETARY
      ══════════════════════════════════════════════════════ */

      {
        id: 'sec-c01', role: 'sec', stage: 'desk',
        cope: true, scopus: true, wos: true,
        title: { en: 'Data Availability Statement Request', tr: 'Veri Erişilebilirlik Beyanı Talebi' },
        subject: {
          en: 'Action Required: Data Availability Statement [Ref: {ID}]',
          tr: 'İşlem Gerekli: Veri Erişilebilirlik Beyanı [Ref: {ID}]'
        },
        body: {
          en: `Dear Author(s),

As part of Pedagogical Perspective's open science commitment and in alignment with Scopus and Web of Science transparency requirements, all manuscripts must include a Data Availability Statement (DAS).

Your manuscript titled "{TITLE}" (Ref: {ID}) does not yet include a complete Data Availability Statement. Please select the statement that accurately describes the status of the data underlying your study and include it in the revised manuscript:

OPTION 1 — Data publicly available:
"The data that support the findings of this study are openly available in [repository name] at [URL/DOI]."

OPTION 2 — Data available on reasonable request:
"The data that support the findings of this study are available from the corresponding author upon reasonable request."

OPTION 3 — Data not available / confidentiality restrictions:
"The data are not available due to [reason, e.g. privacy/ethical restrictions]. Aggregated/anonymised summary data may be available upon reasonable request."

OPTION 4 — No new data were generated:
"No new data were generated or analysed in support of this research." (Applicable to theoretical, review, or meta-analytic studies.)

OPTION 5 — Data available in the article:
"All relevant data are included in the article and/or its supplementary materials."

Please include your chosen statement in the Methods or a dedicated 'Data Availability' section of your manuscript and return the updated file within {X} working days.

Sincerely,
Editorial Secretary
Pedagogical Perspective
info@pedagogicalperspective.com`,
          tr: `Sayın Yazar(lar),

Pedagogical Perspective'in açık bilim taahhüdü ve Scopus ile Web of Science şeffaflık gereklilikleriyle uyum kapsamında, tüm makalelerin bir Veri Erişilebilirlik Beyanı (DAS) içermesi zorunludur.

"{BAŞLIK}" başlıklı makaleniz (Ref: {ID}), henüz eksiksiz bir Veri Erişilebilirlik Beyanı içermemektedir. Lütfen çalışmanızın temelini oluşturan verilerin durumunu doğru biçimde açıklayan beyanı seçiniz ve revize edilmiş makaleye ekleyiniz:

SEÇENEK 1 — Veriler kamuya açık:
"Bu çalışmanın bulgularını destekleyen veriler, [depo adı]'nda [URL/DOI] adresinde açıkça erişilebilir durumdadır."

SEÇENEK 2 — Veriler makul talep üzerine erişilebilir:
"Bu çalışmanın bulgularını destekleyen veriler, makul bir talep üzerine sorumlu yazardan temin edilebilir."

SEÇENEK 3 — Veriler mevcut değil / gizlilik kısıtlamaları:
"Veriler, [nedeni, ör. gizlilik/etik kısıtlamalar] nedeniyle erişime açık değildir. Toplu/anonimleştirilmiş özet veriler makul talep üzerine sağlanabilir."

SEÇENEK 4 — Yeni veri üretilmedi:
"Bu araştırmayı destekleyen yeni bir veri üretilmemiş veya analiz edilmemiştir." (Kuramsal, derleme veya meta-analitik çalışmalar için geçerlidir.)

SEÇENEK 5 — Veriler makalede mevcut:
"Tüm ilgili veriler makale ve/veya ek materyallerine dahil edilmiştir."

Lütfen seçtiğiniz beyanı makalenizin Yöntem bölümüne veya özel bir "Veri Erişilebilirliği" bölümüne ekleyiniz ve güncellenmiş dosyayı {X} iş günü içinde iletiniz.

Saygılarımızla,
Editöryal Sekreter
Pedagogical Perspective
info@pedagogicalperspective.com`
        }
      },

      {
        id: 'sec-c02', role: 'sec', stage: 'desk',
        cope: true, scopus: true,
        title: { en: 'Open Science & ORCID Compliance Check', tr: 'Açık Bilim ve ORCID Uyumluluk Kontrolü' },
        subject: {
          en: 'Action Required: Open Science Compliance [Ref: {ID}]',
          tr: 'İşlem Gerekli: Açık Bilim Uyumluluğu [Ref: {ID}]'
        },
        body: {
          en: `Dear Author(s),

As Pedagogical Perspective works toward meeting Scopus Source Title Evaluation Criteria (STEC) and Web of Science quality standards, we are conducting an open science compliance check for your manuscript titled "{TITLE}" (Ref: {ID}).

Please confirm or provide the following:

1. ORCID iD — All authors are required to provide a verified ORCID iD.
   ☐ All authors have ORCID iDs included in the Title Page.
   ☐ Missing ORCID for: _______________ (register free at orcid.org)

2. Funding Statement — A funding declaration must be included, even if no funding was received.
   ☐ "This research received no specific grant from any funding agency in the public, commercial, or not-for-profit sectors."
   ☐ Funded by: _______________ (Grant No.: _______________)

3. Acknowledgements — Please confirm any individuals who contributed to the work but do not meet authorship criteria are acknowledged.
   ☐ No acknowledgements required.
   ☐ Acknowledgements included.

4. Preprint Disclosure — Has this manuscript been posted as a preprint?
   ☐ No
   ☐ Yes — Server: _______________ URL: _______________

5. Registered Study — Was this study pre-registered?
   ☐ No
   ☐ Yes — Registry: _______________ ID: _______________

Please return this information within {X} working days.

Sincerely,
Editorial Secretary
Pedagogical Perspective
info@pedagogicalperspective.com`,
          tr: `Sayın Yazar(lar),

Pedagogical Perspective, Scopus Kaynak Başlığı Değerlendirme Kriterleri (STEC) ve Web of Science kalite standartlarını karşılamaya yönelik çalışmalar sürdürmektedir. Bu kapsamda "{BAŞLIK}" başlıklı makaleniz (Ref: {ID}) için açık bilim uyumluluk kontrolü yapılmaktadır.

Lütfen aşağıdakileri onaylayınız veya sağlayınız:

1. ORCID iD — Tüm yazarların doğrulanmış bir ORCID iD sağlaması zorunludur.
   ☐ Tüm yazarların ORCID iD'leri Başlık Sayfasına eklenmiştir.
   ☐ ORCID eksik: _______________ (orcid.org adresinden ücretsiz kayıt olabilirsiniz)

2. Finansman Beyanı — Herhangi bir fon alınmamış olsa bile finansman beyanı eklenmelidir.
   ☐ "Bu araştırma, kamu, ticari veya kâr amacı gütmeyen sektörlerdeki herhangi bir finansman kuruluşundan özel bir hibe almamıştır."
   ☐ Fon sağlayan: _______________ (Hibe No.: _______________)

3. Teşekkürler — Çalışmaya katkıda bulunan ancak yazarlık kriterlerini karşılamayan kişilerin teşekkür bölümünde anıldığını lütfen onaylayınız.
   ☐ Teşekkür gerekmemektedir.
   ☐ Teşekkürler dahil edilmiştir.

4. Ön Baskı Beyanı — Bu makale bir ön baskı olarak yayımlandı mı?
   ☐ Hayır
   ☐ Evet — Sunucu: _______________ URL: _______________

5. Ön Kayıt — Bu çalışma önceden kayıt altına alındı mı?
   ☐ Hayır
   ☐ Evet — Kayıt sistemi: _______________ ID: _______________

Lütfen bu bilgileri {X} iş günü içinde iletiniz.

Saygılarımızla,
Editöryal Sekreter
Pedagogical Perspective
info@pedagogicalperspective.com`
        }
      },

      {
        id: 'sec-c03', role: 'sec', stage: 'production',
        cope: true, scopus: true,
        title: { en: 'Copyright / Licence Agreement (CC BY 4.0)', tr: 'Telif Hakkı / Lisans Sözleşmesi (CC BY 4.0)' },
        subject: {
          en: 'Action Required: Copyright Licence Agreement [Ref: {ID}]',
          tr: 'İşlem Gerekli: Telif Hakkı Lisans Sözleşmesi [Ref: {ID}]'
        },
        body: {
          en: `Dear Author(s),

Prior to the publication of your article titled "{TITLE}" in Pedagogical Perspective, we require confirmation of the copyright and licence terms.

Pedagogical Perspective is a fully open-access journal published under the Creative Commons Attribution 4.0 International (CC BY 4.0) licence. Under this licence:
  ✓ Authors retain full copyright of their work.
  ✓ The article is freely available to read, download, and share.
  ✓ Others may reuse and adapt the work, provided the original source is cited.
  ✓ No article processing charges (APCs) are levied.

By proceeding with publication, all listed authors confirm that:
1. They are the original authors and hold full rights to the submitted work.
2. The manuscript has not been published elsewhere and no copyright conflicts exist.
3. Any third-party material (figures, tables, instruments) used in the manuscript has been properly licensed or falls under fair use, and relevant permissions have been obtained.
4. The article will be published under CC BY 4.0 and will be permanently open access.

Please confirm your agreement by replying to this message with "I/We agree to publish under CC BY 4.0."

If you have any concerns regarding copyright or third-party permissions, please contact us before confirming.

Sincerely,
Editorial Secretary
Pedagogical Perspective
info@pedagogicalperspective.com
CC BY 4.0 Licence: https://creativecommons.org/licenses/by/4.0/`,
          tr: `Sayın Yazar(lar),

"{BAŞLIK}" başlıklı makalenizin Pedagogical Perspective'de yayımlanmasından önce telif hakkı ve lisans koşullarının onaylanması gerekmektedir.

Pedagogical Perspective, Creative Commons Atıf 4.0 Uluslararası (CC BY 4.0) lisansı kapsamında yayımlanan tam açık erişimli bir dergidir. Bu lisans çerçevesinde:
  ✓ Yazarlar çalışmalarının tam telif hakkını elinde bulundurur.
  ✓ Makale ücretsiz olarak okunabilir, indirilebilir ve paylaşılabilir.
  ✓ Diğerleri, özgün kaynağa atıf yapılması koşuluyla çalışmayı yeniden kullanabilir ve uyarlayabilir.
  ✓ Makale işlem ücreti (APC) alınmaz.

Yayına devam ederek, listede yer alan tüm yazarlar şunları onaylamış sayılır:
1. Özgün yazarlar olduklarını ve gönderilen çalışma üzerinde tam haklara sahip olduklarını.
2. Makalenin başka bir yerde yayımlanmadığını ve telif hakkı çatışmalarının bulunmadığını.
3. Makalede kullanılan üçüncü taraf materyallerinin (şekil, tablo, ölçek) uygun şekilde lisanslandığını veya adil kullanım kapsamında olduğunu ve ilgili izinlerin alındığını.
4. Makalenin CC BY 4.0 kapsamında yayımlanacağını ve kalıcı olarak açık erişimde bulunacağını.

Lütfen bu mesajı "CC BY 4.0 kapsamında yayımlamayı kabul ediyorum/ediyoruz" şeklinde yanıtlayarak onayınızı bildiriniz.

Telif hakkı veya üçüncü taraf izinleriyle ilgili herhangi bir endişeniz varsa lütfen onaylamadan önce bizimle iletişime geçiniz.

Saygılarımızla,
Editöryal Sekreter
Pedagogical Perspective
info@pedagogicalperspective.com
CC BY 4.0 Lisansı: https://creativecommons.org/licenses/by/4.0/`
        }
      }

    ] /* end messages */


  }; /* end PEDPER_MESSAGES */

  global.PEDPER_MESSAGES = PEDPER_MESSAGES;

})(typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this));
