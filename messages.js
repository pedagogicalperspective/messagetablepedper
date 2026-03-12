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
      editor: 'Erhan YAYLAK',
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
      { id: 'submission',   label: { en: 'Submission',   tr: 'Başvuru'           } },
      { id: 'desk',         label: { en: 'Desk Review',  tr: 'Ön Değerlendirme'  } },
      { id: 'review',       label: { en: 'Peer Review',  tr: 'Hakemlik'          } },
      { id: 'revision',     label: { en: 'Revision',     tr: 'Revizyon'          } },
      { id: 'decision',     label: { en: 'Decision',     tr: 'Karar'             } },
      { id: 'copyediting',  label: { en: 'Copyediting',  tr: 'Dil Düzenleme'     } },
      { id: 'layout',       label: { en: 'Layout',       tr: 'Mizanpaj'          } },
      { id: 'proofreading', label: { en: 'Proofreading', tr: 'Son Okuma'         } },
      { id: 'production',   label: { en: 'Production',   tr: 'Yayın'             } },
      { id: 'other',        label: { en: 'Other',        tr: 'Diğer'             } }
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

If you have any questions in the meantime, please do not hesitate to contact us at info@pedagogicalperspective.com.

We appreciate your interest in Pedagogical Perspective and look forward to reviewing your work.

Sincerely,
Erhan YAYLAK
Editor-in-Chief
Pedagogical Perspective
info@pedagogicalperspective.com
https://pedagogicalperspective.com`,
          tr: `Sayın Yazar(lar),

"{BAŞLIK}" başlıklı makalenizi Pedagogical Perspective (PedPer) dergisine ilettiğiniz için teşekkür ederiz. Başvurunuz alınmış olup {ID} referans numarası atanmıştır.

Makaleniz, dergimizin kapsam alanı, biçimlendirme standartları ve etik gerekliliklerine uygunluğunun değerlendirilmesi amacıyla ön editöryal incelemeye alınacaktır. Bu aşamanın tahminen {X} iş günü içinde tamamlanması beklenmekte olup sonuç hakkında bilgilendirileceksiniz.

Dergimize başvuru yapılması, yazarların makalenin özgün olduğunu, daha önce kısmen ya da tamamen yayımlanmadığını ve başka bir dergide değerlendirme sürecinde bulunmadığını beyan etmesi anlamına gelir.

Bu süreçte herhangi bir sorunuz olursa info@pedagogicalperspective.com adresinden bizimle iletişime geçebilirsiniz.

Pedagogical Perspective'e gösterdiğiniz ilgi için teşekkür eder, çalışmalarınızı incelemeyi sabırsızlıkla bekleriz.

Saygılarımızla,
Erhan YAYLAK
Baş Editör
Pedagogical Perspective
info@pedagogicalperspective.com
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
Erhan YAYLAK
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
Erhan YAYLAK
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
Erhan YAYLAK
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
Erhan YAYLAK
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
Erhan YAYLAK
Editor-in-Chief
Pedagogical Perspective`,
          tr: `Sayın Yazar(lar),

"{BAŞLIK}" başlıklı makalenizin hakem değerlendirmesi için ilgili uzmanlara iletildiğini bildirmekten memnuniyet duyarız.

Pedagogical Perspective, çift kör hakem değerlendirme sürecini benimsemektedir; bu süreçte her makale, ilgili alanda uzman en az iki bağımsız hakem tarafından incelenmektedir. Süreç boyunca hem yazarların hem de hakemlerin kimlikleri gizli tutulmaktadır.

Değerlendirme aşamasının {X} hafta içinde tamamlanması hedeflenmekte; ancak hakem müsaitlik durumuna bağlı olarak zaman çizelgesi değişkenlik gösterebilmektedir. Önemli gelişmeler hakkında sizi bilgilendirmeye devam edeceğiz.

Sabrınız ve Pedagogical Perspective'e gösterdiğiniz süregelen ilgi için teşekkür ederiz.

Saygılarımızla,
Erhan YAYLAK
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
Erhan YAYLAK
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
Erhan YAYLAK
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
Erhan YAYLAK
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
Erhan YAYLAK
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
Erhan YAYLAK
Editor-in-Chief
Pedagogical Perspective`,
          tr: `Sayın Yazar(lar),

"{BAŞLIK}" başlıklı makalenizin revize edilmiş versiyonunu ilettiğiniz için teşekkür ederiz. Revize makalenin başarıyla alındığını teyit ederiz.

Revize başvurunuzun değerlendirmesine devam edebilmek için, hakem yorumlarının her birinin nasıl ele alındığını ayrıntılı biçimde açıklayan PedPer Revizyon Formu'nu doldurmanızı rica ederiz. Doldurulmuş formu bu mesaja yanıt olarak (veya OJS sistemi aracılığıyla) yükleyiniz.

Bu adım, inceleme sürecini etkin biçimde tamamlamamıza ve yapılan revizyonların şeffaf değerlendirmesini sağlamamıza yardımcı olacaktır.

İşbirliğiniz için teşekkür eder, sonuç hakkında zamanı geldiğinde sizi bilgilendireceğimizi bildiririz.

Saygılarımızla,
Erhan YAYLAK
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
Erhan YAYLAK
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
Erhan YAYLAK
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
Erhan YAYLAK
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
Erhan YAYLAK
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
Erhan YAYLAK
Editor-in-Chief
Pedagogical Perspective`,
          tr: `Sayın Yazar(lar),

Pedagogical Perspective (PedPer) dergisinde editöryal değerlendirme sürecinde bulunan "{BAŞLIK}" başlıklı makalenizle ilgili PedPer Çıkar Çatışması Beyan Formu ekte sunulmaktadır.

COPE (Yayın Etiği Komitesi) yönergelerine uygun olarak, tüm yazarların makalede sunulan araştırmayı etkilediği değerlendirilebilecek finansal, kişisel veya mesleki ilişkileri beyan etmesi gerekmektedir.

Lütfen formdaki ilgili tüm bölümleri doldurunuz ve mümkün olan en kısa sürede e-posta yoluyla ya da OJS başvuru sistemi aracılığıyla tarafımıza iletiniz.

İşbirliğiniz için teşekkür ederiz.

Saygılarımızla,
Erhan YAYLAK
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
Erhan YAYLAK
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
Erhan YAYLAK
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
Erhan YAYLAK
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
Erhan YAYLAK
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
Erhan YAYLAK
Editor-in-Chief
Pedagogical Perspective
info@pedagogicalperspective.com`,
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
Erhan YAYLAK
Baş Editör
Pedagogical Perspective
info@pedagogicalperspective.com`
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
Erhan YAYLAK
Editor-in-Chief
Pedagogical Perspective`,
          tr: `Sayın Yazar(lar),

Talebiniz doğrultusunda, "{BAŞLIK}" başlıklı makalenizin (Ref: {ID}) Pedagogical Perspective'den geri çekildiğini teyit ederiz.

Makale, editöryal sistemimizden resmi olarak kaldırılmış olup artık herhangi bir değerlendirme sürecine tabi tutulmayacaktır. İleride revize edilmiş bir versiyonu yeniden göndermek istemeniz halinde, makalenin yeni bir başvuru olarak değerlendirileceğini belirtmek isteriz.

Pedagogical Perspective'e gösterdiğiniz ilgi için teşekkür eder, çalışmalarınızda başarılar dileriz.

Saygılarımızla,
Erhan YAYLAK
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
Erhan YAYLAK
Editor-in-Chief
Pedagogical Perspective`,
          tr: `Sayın Yazar(lar),

"{BAŞLIK}" başlıklı makalenizin (Ref: {ID}) revizyonuna ilişkin mesajınız için teşekkür ederiz.

Süre uzatma talebinizin onaylandığını bildirmekten memnuniyet duyarız. Yeni revizyon son tarihiniz: {YENİ TARİH}.

Bu tarihten öteye herhangi bir ek uzatma imkânı sunulamayacağını belirtmek isteriz. Uzatılmış süre zarfında revizyonu tamamlamakta güçlük çekmeniz halinde lütfen derhal bizimle iletişime geçiniz.

Revize edilmiş makalenizi bekliyoruz.

Saygılarımızla,
Erhan YAYLAK
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
Erhan YAYLAK (Ph.D.)
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
Erhan YAYLAK (Dr.)
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

    ] /* end messages */

  }; /* end PEDPER_MESSAGES */

  global.PEDPER_MESSAGES = PEDPER_MESSAGES;

})(typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this));
