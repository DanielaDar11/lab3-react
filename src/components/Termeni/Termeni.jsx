import React from 'react';
import Section from '../Sectiune/Section';
import styles from './Termeni.module.css';

function TermeniSiConditii() {
  return (
    <>
      <h1>Termeni și Condiții</h1>
      <div className={styles.privacycontainer}>
      <p>
      Prin accesarea și utilizarea site-ului Via Travel, sunteți de acord cu termenii și condițiile de mai jos. Vă recomandăm să le citiți cu atenție înainte de a folosi serviciile noastre.
Acest Acord reglementează utilizarea serviciilor și conținutului oferite de Via Travel. Accesând site-ul nostru sau folosind serviciile noastre, acceptați în totalitate termenii acestui acord și sunteți de acord să respectați legislația în vigoare.
Informațiile disponibile pe site-ul Via Travel, inclusiv ofertele turistice, prețurile și disponibilitatea acestora, sunt proprietatea noastră sau a partenerilor noștri. Toate drepturile asupra conținutului site-ului și aplicațiilor mobile, inclusiv software-ul, sunt protejate de legislația privind drepturile de autor și proprietatea intelectuală.
Ne rezervăm dreptul de a modifica, actualiza sau întrerupe temporar serviciile site-ului, fără notificare prealabilă. Utilizarea serviciilor Via Travel este permisă doar în scopuri legale, respectând toate reglementările și legile aplicabile.
      </p>

      <Section title="Politica de Confidențialitate">
      Utilizarea site-ului web și a aplicațiilor „Via Travel” este reglementată de politica de confidențialitate a companiei, disponibilă pe pagina web oficială a „Via Travel”. Această politică face parte integrantă din condițiile de utilizare ale serviciilor noastre.
      </Section>
        <p>„Via Travel” pune la dispoziția utilizatorilor instrumente și resurse pentru planificarea și rezervarea serviciilor turistice, inclusiv căutarea de bilete de avion, cazare, pachete de vacanță și alte servicii, toate regăsite pe site-ul nostru oficial. Aceste servicii sunt disponibile acum și vor fi extinse în viitor.</p>
      <Section title="Descrierea serviciului">
      După finalizarea căutării pentru serviciul dorit, veți fi redirecționat către pagina de rezervare, unde va trebui să completați următoarele informații:
        <ul>
          <li>Numele complet;</li>
          <li>Data nașterii;</li>
          <li>Detalii despre documentul de identificare;</li>
          <li>Adresa de e-mail și numărul de telefon al cumpărătorului.</li>
        </ul>
        Prin completarea acestui formular și finalizarea rezervării, confirmați că sunteți de acord cu termenele și condițiile de utilizare, tarifele, precum și cu prelucrarea datelor personale.
Dacă alegeți plata prin „card bancar”, veți fi redirecționat către sistemul de plăți, unde veți introduce informațiile cardului. După procesarea plății, veți primi confirmarea rezervării și detaliile prin e-mail.
În cazul alegerii metodei de plată „la birou”, va trebui să salvați sau să imprimați numărul de rezervare și să veniți la biroul „Via Travel” pentru a efectua plata înainte de termenul limită al rezervării. Dacă nu primiți confirmarea prin e-mail sau întâmpinați dificultăți, echipa noastră de suport vă stă la dispoziție la numerele de telefon afișate pe site.
„Via Travel” oferă servicii de căutare gratuite doar pentru uz personal. Utilizarea site-ului pentru scopuri comerciale sau prin procese automatizate este interzisă. Totodată, este interzisă utilizarea materialelor și mărcilor comerciale protejate prin drepturi de autor.
      </Section>

      <Section title="Drepturi de autor și Proprietate Intelectuală">
      Toate materialele de pe site-ul web sau aplicație, inclusiv documentația, textul, grafică, imagini, interfața și alte lucrări, sunt protejate prin drepturi de autor și sunt proprietatea „Via Travel” sau licențiate de aceasta. Toate drepturile sunt rezervate.
      Materialele pot conține mărci comerciale și denumiri comerciale deținute de „Via Travel” sau de terți. Dacă nu există altă mențiune, aveți permisiunea de a vizualiza, descărca sau imprima materialele, cu condiția de a respecta următoarele:
        <ul>
          <li>Orice copie a materialelor trebuie să includă notificarea privind drepturile de autor ale „Via Travel”.</li>
          <li>„Via Travel” își rezervă dreptul de a revoca permisiunea de utilizare a materialelor în orice moment.</li>
        </ul>
      </Section>

      <Section title="Securitatea utilizatorilor">
      Anumite zone ale site-ului web sau ale aplicațiilor sunt protejate prin parolă și pot fi accesate doar după înregistrare sau autentificare. După înregistrare, veți primi un profil și veți alege o parolă pentru a accesa serviciile turistice oferite.
      Sunteți responsabil pentru păstrarea confidențialității parolei și pentru toate activitățile desfășurate utilizând parola dumneavoastră. Orice utilizare neautorizată a parolei trebuie raportată imediat. Compania „Via Travel” nu va fi responsabilă pentru daunele sau pierderile cauzate de nerespectarea acestor reguli.
      </Section>

      <Section title="Întreruperea activității">
      Pentru a utiliza serviciile „Via Travel”, sunteți de acord să nu le folosiți în scopuri ilegale sau care contravin acestor termeni și condiții. Compania „Via Travel” vă recomandă să utilizați serviciile pentru planificarea călătoriilor și schimbul de informații turistice, respectând în totalitate condițiile de utilizare. De asemenea, este interzisă trimiterea de mesaje nesolicitate sau inadecvate.
În mod special, este interzisă utilizarea sistemelor informatice ale „Via Travel” pentru distribuirea materialelor nesolicitate, cu excepția celor legate de itinerarii turistice. Încălcarea acestor condiții poate duce la blocarea contului fără notificare prealabilă și ștergerea informațiilor asociate.
Sunteți de acord să nu utilizați site-ul sau aplicațiile „Via Travel” pentru a încărca, posta, trimite prin email sau distribui:
             <ul>
          <li>Conținut ilegal, dăunător, amenințător, abuziv, defăimător, vulgar sau care încalcă intimitatea altor persoane;</li>
          <li>Declarații false sau care induc în eroare despre relațiile cu „Via Travel” sau terți;</li>
          <li>Publicitate nesolicitată, spam sau materiale promoționale interzise;</li>
          <li>Fișiere sau programe care pot distruge sau afecta funcționarea echipamentelor sau software-ului;</li>
          <li>Activități care împiedică sau afectează funcționarea serviciilor „Via Travel”.</li>
        </ul>
      </Section>
      
    </div>
    </>
  );
}

export default TermeniSiConditii;
