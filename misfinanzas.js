<div id="mf-root">
<div id="mf-loader" style="display:none">
  <div class="mf-spinner"></div>
  <div class="mf-loader-txt">Cargando</div>
</div>
<div id="mf-toasts"></div>

<!-- AUTH -->
<div id="mf-auth" style="display:none;align-items:center;justify-content:center;min-height:100vh">
  <div class="mf-auth-card">
    <div class="mf-auth-logo">
      <h1>Mis Finanzas</h1>
      <p>Constanza Graell</p>
    </div>
    <div class="mf-auth-tabs">
      <button class="mf-atab on" onclick="mfSwitchAuth('login')">Ingresar</button>
      <button class="mf-atab" onclick="mfSwitchAuth('reg')">Registrarse</button>
    </div>
    <div id="mf-aerr" class="mf-err"></div>
    <div id="mf-lform">
      <div class="mf-fg"><label>Email</label><input type="email" id="mf-lemail" placeholder="tu@email.com"></div>
      <div class="mf-fg"><label>Contraseña</label><input type="password" id="mf-lpw" placeholder="••••••••"></div>
      <button class="mf-btn mf-btn-p mf-btn-full" onclick="mfLogin()">Ingresar</button>
    </div>
    <div id="mf-rform" style="display:none">
      <div class="mf-fg"><label>Nombre completo</label><input type="text" id="mf-rname" placeholder="Tu nombre"></div>
      <div class="mf-fg"><label>Email</label><input type="email" id="mf-remail" placeholder="tu@email.com"></div>
      <div class="mf-fg"><label>Contraseña</label><input type="password" id="mf-rpw" placeholder="Mínimo 6 caracteres"></div>
      <div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:18px">
        <input type="checkbox" id="mf-terms" style="width:16px;height:16px;flex-shrink:0;margin-top:2px;accent-color:var(--gold);cursor:pointer">
        <label for="mf-terms" style="font-size:12px;color:var(--text);letter-spacing:0;text-transform:none;cursor:pointer;line-height:1.5">
          Acepto los <a href="/terminos" target="_blank" style="color:var(--gold);text-decoration:none;border-bottom:1px solid var(--gold-dim)">Términos y Condiciones</a>
          y la <a href="/privacidad" target="_blank" style="color:var(--gold);text-decoration:none;border-bottom:1px solid var(--gold-dim)">Política de Privacidad</a>
        </label>
      </div>
      <button class="mf-btn mf-btn-p mf-btn-full" onclick="mfRegister()">Crear mi cuenta</button>
      <div id="mf-reg-success" style="display:none;margin-top:20px;text-align:center;padding:20px;background:rgba(129,199,132,.08);border:1px solid var(--success);border-radius:var(--radius)">
        <div style="font-size:28px;margin-bottom:10px">✉️</div>
        <div style="font-family:var(--ft);font-size:20px;font-weight:600;color:var(--success);margin-bottom:8px">¡Cuenta creada!</div>
        <div style="font-size:13px;color:var(--text);line-height:1.6">Te enviamos un email de confirmación.<br>Revisa tu bandeja (y el spam) para activar tu cuenta.</div>
      </div>
    </div>
  </div>
</div>

<!-- MOBILE BAR -->
<div class="mf-topbar" id="mf-topbar">
  <button class="mf-ham" onclick="mfToggleSidebar()">☰</button>
  <span style="font-family:var(--ft);font-size:18px;color:var(--gold)">Mis Finanzas</span>
  <div style="width:28px"></div>
</div>
<div class="mf-sov" id="mf-sov" onclick="mfCloseSidebar()"></div>

<!-- APP -->
<div id="mf-app" style="display:none">
  <div class="mf-layout">

    <!-- SIDEBAR -->
    <aside class="mf-sidebar" id="mf-sidebar">
      <div class="mf-sb-logo">
        <h2>Mis Finanzas</h2>
        <span>Constanza Graell</span>
      </div>
      <nav class="mf-nav">
        <div class="mf-nitem on" data-p="dashboard" onclick="mfPage('dashboard')"><span>📊</span> Dashboard</div>
        <div class="mf-nitem" data-p="billetera" onclick="mfPage('billetera')"><span>💰</span> Billetera</div>
        <div class="mf-nitem" data-p="deudas" onclick="mfPage('deudas')"><span>🔴</span> Lo Que Debo</div>
        <div class="mf-nitem" data-p="activos" onclick="mfPage('activos')"><span>🟢</span> Lo Que Tengo</div>
        <div class="mf-nitem" data-p="patrimonio" onclick="mfPage('patrimonio')"><span>✨</span> Lo Que Es Mío</div>
        <hr class="mf-ndiv">
        <div class="mf-nitem" data-p="cartolas" onclick="mfPage('cartolas')"><span>📄</span> Subir Cartolas</div>
        <div class="mf-nitem" data-p="uso" onclick="mfPage('uso')"><span>📖</span> Uso del Sitio</div>
        <div class="mf-nitem" data-p="config" onclick="mfPage('config')"><span>⚙️</span> Configuración</div>
        <div class="mf-nitem mf-hidden" id="mf-nav-admin" data-p="admin" onclick="mfPage('admin')"><span>🔒</span> Admin</div>
      </nav>
      <div class="mf-sb-foot">
        <div class="mf-user" onclick="mfPage('perfil')">
          <div class="mf-ava" id="mf-sb-ava">👤</div>
          <div class="mf-f1" style="min-width:0">
            <div class="mf-uname" id="mf-sb-name">–</div>
            <div class="mf-uemail" id="mf-sb-email">–</div>
          </div>
        </div>
      </div>
    </aside>

    <!-- MAIN -->
    <main class="mf-main">
      <div class="mf-period-bar">
        <div>
          <div class="mf-ptitle" id="mf-ptitle">Dashboard</div>
          <div class="mf-psub" id="mf-psub">Resumen general</div>
        </div>
        <div class="mf-psel">
          <select id="mf-ssel-m" onchange="mfPeriodChange()">
            <option value="1">Enero</option><option value="2">Febrero</option>
            <option value="3">Marzo</option><option value="4">Abril</option>
            <option value="5">Mayo</option><option value="6">Junio</option>
            <option value="7">Julio</option><option value="8">Agosto</option>
            <option value="9">Septiembre</option><option value="10">Octubre</option>
            <option value="11">Noviembre</option><option value="12">Diciembre</option>
          </select>
          <select id="mf-ssel-y" onchange="mfPeriodChange()"></select>
        </div>
      </div>

      <!-- DASHBOARD -->
      <div class="mf-page on" id="mf-p-dashboard">
        <div class="mf-3col mf-mb24">
          <div class="mf-sc mf-card-gold"><div class="mf-slabel">Patrimonio Neto</div><div class="mf-sval mf-gold" id="mf-d-pat">$0</div></div>
          <div class="mf-sc"><div class="mf-slabel">Total Activos</div><div class="mf-sval mf-success" id="mf-d-act">$0</div></div>
          <div class="mf-sc"><div class="mf-slabel">Total Deudas</div><div class="mf-sval mf-error" id="mf-d-deu">$0</div></div>
          <div class="mf-sc"><div class="mf-slabel">Ingresos del Mes</div><div class="mf-sval" id="mf-d-ing">$0</div></div>
          <div class="mf-sc"><div class="mf-slabel">Egresos del Mes</div><div class="mf-sval" id="mf-d-egr">$0</div></div>
          <div class="mf-sc"><div class="mf-slabel">Saldo del Mes</div><div class="mf-sval" id="mf-d-sal">$0</div></div>
        </div>
        <div class="mf-2col mf-mb24">
          <div class="mf-card"><div class="mf-ch"><span class="mf-ctitle">Evolución Mensual</span></div><div class="mf-chw"><canvas id="mf-ch-bil"></canvas></div></div>
          <div class="mf-card"><div class="mf-ch"><span class="mf-ctitle">Distribución Egresos</span></div><div class="mf-chw"><canvas id="mf-ch-dist"></canvas></div></div>
        </div>
        <div class="mf-2col">
          <div class="mf-card"><div class="mf-ch"><span class="mf-ctitle">Evolución del Patrimonio</span></div><div class="mf-chw"><canvas id="mf-ch-pat"></canvas></div></div>
          <div class="mf-card"><div class="mf-ch"><span class="mf-ctitle">Activos vs Pasivos</span></div><div class="mf-chw"><canvas id="mf-ch-pdist"></canvas></div></div>
        </div>
      </div>

      <!-- BILLETERA -->
      <div class="mf-page" id="mf-p-billetera">
        <div class="mf-sgrid">
          <div class="mf-sc"><div class="mf-slabel">Total Ingresos</div><div class="mf-sval mf-success" id="mf-s-ing">$0</div></div>
          <div class="mf-sc"><div class="mf-slabel">Arriendo / Dividendo</div><div class="mf-sval mf-gold" id="mf-s-viv">$0</div></div>
          <div class="mf-sc"><div class="mf-slabel">Pago de Deudas</div><div class="mf-sval" id="mf-s-deu">$0</div></div>
          <div class="mf-sc"><div class="mf-slabel">CVM</div><div class="mf-sval" id="mf-s-cvm">$0</div></div>
          <div class="mf-sc"><div class="mf-slabel">Aportes al Tesoro</div><div class="mf-sval" id="mf-s-tes">$0</div></div>
          <div class="mf-sc mf-card-gold"><div class="mf-slabel">Saldo Final</div><div class="mf-sval" id="mf-s-sal">$0</div></div>
        </div>
        <div class="mf-tabs">
          <button class="mf-tbtn on" onclick="mfBTab('ingresos',this)">Ingresos</button>
          <button class="mf-tbtn" onclick="mfBTab('cvm',this)">CVM</button>
          <button class="mf-tbtn" onclick="mfBTab('deuda',this)">Deuda</button>
          <button class="mf-tbtn" onclick="mfBTab('tesoro',this)">Tesoro</button>
        </div>
        <div class="mf-tp on" id="mf-bt-ingresos">
          <div class="mf-card">
            <div class="mf-ch"><span class="mf-ctitle">Lo Que Entra</span>
              <button class="mf-btn mf-btn-g mf-btn-sm" onclick="mfOpenCat('income')">+ Categoría</button></div>
            <table class="mf-tbl"><thead><tr>
              <th>Categoría</th><th class="r">Presupuestado</th><th class="r">Real</th><th class="r">Diferencia</th><th class="r" style="width:50px"></th>
            </tr></thead><tbody id="mf-ing-tbody"></tbody></table>
          </div>
        </div>
        <div class="mf-tp" id="mf-bt-cvm">
          <div class="mf-card">
            <div class="mf-ch"><span class="mf-ctitle">Costo de Vida Mensual</span>
              <button class="mf-btn mf-btn-g mf-btn-sm" onclick="mfOpenCat('cvm')">+ Categoría</button></div>
            <table class="mf-tbl"><thead><tr>
              <th>Categoría</th><th class="r">Presupuestado</th><th class="r">Real</th><th class="r">Diferencia</th><th class="r" style="width:50px"></th>
            </tr></thead><tbody id="mf-cvm-tbody"></tbody></table>
          </div>
        </div>
        <div class="mf-tp" id="mf-bt-deuda">
          <div class="mf-card">
            <div class="mf-ch"><span class="mf-ctitle">Egresos por Deudas</span></div>
            <p style="font-size:13px;color:var(--text);margin-bottom:14px">Los montos se obtienen de <strong>Lo Que Debo</strong>.</p>
            <table class="mf-tbl"><thead><tr>
              <th>Deuda</th><th>Tipo</th><th class="r">Cuota Mensual</th>
            </tr></thead><tbody id="mf-deu-tbody"></tbody></table>
          </div>
        </div>
        <div class="mf-tp" id="mf-bt-tesoro">
          <div class="mf-card">
            <div class="mf-ch"><span class="mf-ctitle">Egresos al Tesoro</span>
              <button class="mf-btn mf-btn-g mf-btn-sm" onclick="mfOpenCat('tesoro')">+ Categoría</button></div>
            <p style="font-size:13px;color:var(--text);margin-bottom:14px">Aportes a tus activos → se reflejan en <strong>Lo Que Tengo</strong>.</p>
            <table class="mf-tbl"><thead><tr>
              <th>Categoría</th><th class="r">Presupuestado</th><th class="r">Real</th><th class="r">Diferencia</th><th class="r" style="width:50px"></th>
            </tr></thead><tbody id="mf-tes-tbody"></tbody></table>
          </div>
        </div>
      </div>

      <!-- LO QUE DEBO -->
      <div class="mf-page" id="mf-p-deudas">
        <div class="mf-2col mf-mb24">
          <div class="mf-card"><div class="mf-slabel">Total Deudas de Consumo</div><div class="mf-sval mf-error" id="mf-tv">$0</div></div>
          <div class="mf-card"><div class="mf-slabel">Total Otras Deudas</div><div class="mf-sval" id="mf-to">$0</div></div>
        </div>
        <!-- Deudas de Consumo -->
        <div class="mf-card mf-mb24" style="border-color:rgba(239,154,154,.4)">
          <div class="mf-ch">
            <span class="mf-ctitle" style="color:var(--error)">🔴 Deudas de Consumo</span>
            <button class="mf-btn mf-btn-d mf-btn-md" onclick="mfOpenLiab('villano')">+ Agregar Deuda</button>
          </div>
          <table class="mf-tbl"><thead><tr>
            <th>Deuda</th><th class="r">Capital</th><th class="r">Intereses</th><th class="r">Cuota</th><th class="r">Ya Pagado</th><th class="r">Por Pagar</th><th class="r">Detalle</th><th class="r" style="width:40px"></th>
          </tr></thead><tbody id="mf-vill-tbody"></tbody></table>
        </div>
        <!-- Otras Deudas -->
        <div class="mf-section-gap"></div>
        <div class="mf-card">
          <div class="mf-ch">
            <span class="mf-ctitle" style="color:var(--warning)">🟡 Otras Deudas</span>
            <button class="mf-btn mf-btn-g mf-btn-md" onclick="mfOpenLiab('otra')">+ Agregar Deuda</button>
          </div>
          <table class="mf-tbl"><thead><tr>
            <th>Deuda</th><th class="r">Capital</th><th class="r">Intereses</th><th class="r">Cuota</th><th class="r">Ya Pagado</th><th class="r">Por Pagar</th><th class="r">Detalle</th><th class="r" style="width:40px"></th>
          </tr></thead><tbody id="mf-otra-tbody"></tbody></table>
        </div>
      </div>

      <!-- LO QUE TENGO -->
      <div class="mf-page" id="mf-p-activos">
        <div class="mf-2col mf-mb24">
          <div class="mf-card"><div class="mf-slabel">Total Inversiones</div><div class="mf-sval mf-gold" id="mf-tinv">$0</div></div>
          <div class="mf-card"><div class="mf-slabel">Total Pertenencias</div><div class="mf-sval" id="mf-tpert">$0</div></div>
        </div>
        <div class="mf-tabs">
          <button class="mf-tbtn on" onclick="mfATab('inversiones',this)">Inversiones</button>
          <button class="mf-tbtn" onclick="mfATab('pertenencias',this)">Pertenencias</button>
        </div>
        <div class="mf-tp on" id="mf-at-inversiones">
          <div class="mf-card">
            <div class="mf-ch"><span class="mf-ctitle">Inversiones y Ahorros</span>
              <button class="mf-btn mf-btn-g mf-btn-sm" onclick="mfOpenAsset('investment')">+ Inversión</button></div>
            <table class="mf-tbl"><thead><tr>
              <th>Nombre</th><th>Institución</th><th class="r">Valor</th><th class="r" style="width:50px"></th>
            </tr></thead><tbody id="mf-inv-tbody"></tbody></table>
          </div>
        </div>
        <div class="mf-tp" id="mf-at-pertenencias">
          <div class="mf-card">
            <div class="mf-ch"><span class="mf-ctitle">Pertenencias y Bienes</span>
              <button class="mf-btn mf-btn-g mf-btn-sm" onclick="mfOpenAsset('belonging')">+ Pertenencia</button></div>
            <table class="mf-tbl"><thead><tr>
              <th>Nombre</th><th class="r">Valor estimado</th><th class="r" style="width:50px"></th>
            </tr></thead><tbody id="mf-pert-tbody"></tbody></table>
          </div>
        </div>
      </div>

      <!-- LO QUE ES MÍO -->
      <div class="mf-page" id="mf-p-patrimonio">
        <div class="mf-card mf-card-gold mf-mb24">
          <div class="mf-pat-lbl">Mi Patrimonio Neto</div>
          <div class="mf-pat-big" id="mf-pat-tot">$0</div>
          <div class="mf-pat-brk">
            <div class="mf-pb"><div class="mf-pb-l">Lo Que Tengo</div><div class="mf-pb-v mf-success" id="mf-pat-act">$0</div></div>
            <div class="mf-pb"><div class="mf-pb-l">Lo Que Debo</div><div class="mf-pb-v mf-error" id="mf-pat-pas">$0</div></div>
            <div class="mf-pb"><div class="mf-pb-l">Saldo Billetera</div><div class="mf-pb-v mf-gold" id="mf-pat-bil">$0</div></div>
          </div>
        </div>
        <div class="mf-2col">
          <div class="mf-card"><div class="mf-ch"><span class="mf-ctitle" style="color:var(--success)">Lo Que Tengo</span></div><div id="mf-pat-alist"></div></div>
          <div class="mf-card"><div class="mf-ch"><span class="mf-ctitle" style="color:var(--error)">Lo Que Debo</span></div><div id="mf-pat-plist"></div></div>
        </div>
      </div>

      <!-- SUBIR CARTOLAS -->
      <div class="mf-page" id="mf-p-cartolas">
        <div class="mf-card mf-mb24">
          <div class="mf-ch"><span class="mf-ctitle">Subir Cartola</span><span class="mf-ai">✦ IA</span></div>
          <p style="font-size:13px;color:var(--text);margin-bottom:16px">La IA clasifica las transacciones automáticamente y te pregunta si tiene dudas.</p>
          <div class="mf-upzone" id="mf-upzone" onclick="document.getElementById('mf-finput').click()"
            ondragover="event.preventDefault();this.classList.add('drag')"
            ondragleave="this.classList.remove('drag')"
            ondrop="mfFileDrop(event)">
            <div class="mf-upico">📂</div>
            <div class="mf-uptxt"><strong>Haz clic o arrastra</strong> tu cartola<br><span style="color:var(--text)">PDF, Excel o CSV</span></div>
          </div>
          <input type="file" id="mf-finput" accept=".pdf,.xlsx,.xls,.csv" style="display:none" onchange="mfFileSelect(event)">
          <div id="mf-pdf-pw-wrap" class="mf-fg mf-mt16" style="display:none">
            <label>Contraseña del PDF <span style="color:var(--muted);font-size:10px;letter-spacing:1px">(los bancos usan el RUT sin puntos, con guión)</span></label>
            <input type="text" id="mf-pdf-pw" placeholder="Ej: 12345678-9">
          </div>
          <div class="mf-fg mf-mt16"><label>Banco / Institución</label>
            <select id="mf-bsel">
              <option value="">Seleccionar banco</option>
              <option>Banco de Chile</option><option>Santander</option>
              <option>BCI</option><option>Scotiabank</option>
              <option>BTG Pactual</option><option>Fintual</option>
              <option>BCI Corredor de Bolsa</option><option>Otro</option>
            </select>
          </div>
          <div class="mf-fg"><label>Tipo de cartola</label>
            <select id="mf-stype">
              <option value="bank">Cuenta corriente / Vista</option>
              <option value="credit_card">Tarjeta de crédito</option>
              <option value="investment">Cartola de inversiones</option>
            </select>
          </div>
          <button class="mf-btn mf-btn-p" id="mf-upbtn" onclick="mfUpload()" disabled>Subir y Clasificar</button>
        </div>
        <div class="mf-card">
          <div class="mf-ch"><span class="mf-ctitle">Historial de Cartolas</span></div>
          <div id="mf-stmts-list"><p style="font-size:13px;color:var(--text)">Sin cartolas subidas.</p></div>
        </div>
      </div>

      <!-- USO DEL SITIO -->
      <div class="mf-page" id="mf-p-uso">
        <div class="mf-card mf-mb24">
          <div class="mf-ch"><span class="mf-ctitle">Manual de Uso</span></div>
          <div style="font-size:14px;color:var(--text);line-height:1.8">
            <p style="margin-bottom:16px"><strong style="color:var(--gold)">Mis Finanzas</strong> es tu herramienta personal para ordenar y visualizar tu situación financiera completa. Aquí tienes una guía rápida de cada sección:</p>
            <div style="margin-bottom:14px;padding:14px;background:var(--bg-card2);border-radius:var(--radius);border-left:3px solid var(--gold)">
              <strong>📊 Dashboard</strong> — Resumen visual de tu situación financiera completa: patrimonio, ingresos, egresos y gráficos históricos.
            </div>
            <div style="margin-bottom:14px;padding:14px;background:var(--bg-card2);border-radius:var(--radius);border-left:3px solid var(--gold)">
              <strong>💰 Billetera</strong> — Registra mes a mes tus ingresos y todos tus egresos (CVM, deudas y aportes al tesoro). Puedes presupuestar y comparar con lo real.
            </div>
            <div style="margin-bottom:14px;padding:14px;background:var(--bg-card2);border-radius:var(--radius);border-left:3px solid var(--error)">
              <strong>🔴 Lo Que Debo</strong> — Registra todas tus deudas con su capital, tasa, cuotas y tabla de amortización. Actualiza el saldo cada mes.
            </div>
            <div style="margin-bottom:14px;padding:14px;background:var(--bg-card2);border-radius:var(--radius);border-left:3px solid var(--success)">
              <strong>🟢 Lo Que Tengo</strong> — Registra tus inversiones y pertenencias con su valor estimado actualizado cada mes.
            </div>
            <div style="margin-bottom:14px;padding:14px;background:var(--bg-card2);border-radius:var(--radius);border-left:3px solid var(--gold)">
              <strong>✨ Lo Que Es Mío</strong> — Tu patrimonio neto calculado automáticamente: Activos − Deudas.
            </div>
            <div style="margin-bottom:14px;padding:14px;background:var(--bg-card2);border-radius:var(--radius);border-left:3px solid var(--muted)">
              <strong>📄 Subir Cartolas</strong> — Sube tu cartola bancaria o de inversiones (PDF, Excel o CSV). La IA clasifica las transacciones automáticamente.
            </div>
          </div>
        </div>
        <div class="mf-card">
          <div class="mf-ch"><span class="mf-ctitle">Preguntas Frecuentes</span></div>
          <div id="mf-faq-list">
            <div class="mf-faq-item">
              <div class="mf-faq-q" onclick="mfToggleFaq(this)"><span>¿Mis datos son privados y seguros?</span><span>＋</span></div>
              <div class="mf-faq-a">Sí. Tus datos están almacenados de forma segura y cifrada. Constanza Graell no tiene acceso ni examina la información que ingresas. Esta herramienta es estrictamente personal y confidencial.</div>
            </div>
            <div class="mf-faq-item">
              <div class="mf-faq-q" onclick="mfToggleFaq(this)"><span>¿Puedo cambiar el mes y ver datos históricos?</span><span>＋</span></div>
              <div class="mf-faq-a">Sí. Usa el selector de mes y año en la parte superior derecha para navegar entre períodos. Cada mes guarda su propia información sin borrar los anteriores.</div>
            </div>
            <div class="mf-faq-item">
              <div class="mf-faq-q" onclick="mfToggleFaq(this)"><span>¿Cómo subo una cartola bancaria?</span><span>＋</span></div>
              <div class="mf-faq-a">Ve a "Subir Cartolas", arrastra o selecciona el archivo (PDF, Excel o CSV). Si el PDF tiene clave, ingresa tu RUT sin puntos con guión (ej: 12345678-9). La IA clasificará las transacciones automáticamente.</div>
            </div>
            <div class="mf-faq-item">
              <div class="mf-faq-q" onclick="mfToggleFaq(this)"><span>¿Qué es el Patrimonio Neto?</span><span>＋</span></div>
              <div class="mf-faq-a">Es la diferencia entre lo que tienes (activos: inversiones + pertenencias) y lo que debes (pasivos: deudas). Un patrimonio positivo significa que tienes más de lo que debes.</div>
            </div>
            <div class="mf-faq-item">
              <div class="mf-faq-q" onclick="mfToggleFaq(this)"><span>¿Qué es el CVM?</span><span>＋</span></div>
              <div class="mf-faq-a">El Costo de Vida Mensual es la suma de todos tus gastos necesarios para vivir cada mes: alimentación, transporte, servicios, salud, educación, etc. No incluye el pago de deudas ni los aportes al ahorro.</div>
            </div>
            <div class="mf-faq-item">
              <div class="mf-faq-q" onclick="mfToggleFaq(this)"><span>¿Puedo editar los montos manualmente?</span><span>＋</span></div>
              <div class="mf-faq-a">Sí. Haz clic en cualquier número para editarlo directamente. Los montos subidos desde cartolas también son editables por si la IA cometió algún error.</div>
            </div>
          </div>
        </div>
      </div>

      <!-- CONFIGURACIÓN -->
      <div class="mf-page" id="mf-p-config">
        <div class="mf-2col">
          <div class="mf-card">
            <div class="mf-ch"><span class="mf-ctitle">Categorías Ingresos</span>
              <button class="mf-btn mf-btn-g mf-btn-sm" onclick="mfOpenCat('income')">+ Nueva</button></div>
            <div id="mf-cfg-inc"></div>
          </div>
          <div class="mf-card">
            <div class="mf-ch"><span class="mf-ctitle">Categorías CVM</span>
              <button class="mf-btn mf-btn-g mf-btn-sm" onclick="mfOpenCat('cvm')">+ Nueva</button></div>
            <div id="mf-cfg-cvm"></div>
          </div>
        </div>
        <div class="mf-card mf-mt24">
          <div class="mf-ch"><span class="mf-ctitle">Sesión</span></div>
          <button class="mf-btn mf-btn-d mf-btn-sm" onclick="mfLogout()">Cerrar Sesión</button>
        </div>
      </div>

      <!-- ADMIN -->
      <div class="mf-page" id="mf-p-admin">
        <div class="mf-card mf-mb24" style="border-color:var(--gold)">
          <div class="mf-ch"><span class="mf-ctitle">🔒 Panel de Administración</span></div>
          <p style="font-size:13px;color:var(--text);margin-bottom:20px">Acceso exclusivo para Constanza Graell.</p>
          <div id="mf-admin-stats" class="mf-3col mf-mb24">
            <div class="mf-sc"><div class="mf-slabel">Usuarios Registrados</div><div class="mf-sval" id="mf-adm-users">–</div></div>
            <div class="mf-sc"><div class="mf-slabel">Activos este mes</div><div class="mf-sval" id="mf-adm-active">–</div></div>
            <div class="mf-sc"><div class="mf-slabel">Cartolas Subidas</div><div class="mf-sval" id="mf-adm-stmts">–</div></div>
          </div>
          <div class="mf-ch" style="margin-bottom:12px"><span class="mf-ctitle">Usuarios</span></div>
          <div id="mf-admin-users-list"><p style="font-size:13px;color:var(--text)">Cargando...</p></div>
        </div>
      </div>

      <!-- PERFIL -->
      <div class="mf-page" id="mf-p-perfil">
        <div class="mf-card" style="max-width:520px">
          <div class="mf-ch"><span class="mf-ctitle">Mi Perfil</span></div>
          <div class="mf-flex mf-aic mf-gap12 mf-mb24">
            <div class="mf-pava" id="mf-pava-wrap" onclick="document.getElementById('mf-avainput').click()">
              <span id="mf-pava-icon">👤</span>
            </div>
            <span style="font-size:13px;color:var(--text)">Clic en el avatar para cambiar foto</span>
            <input type="file" id="mf-avainput" accept="image/*" style="display:none" onchange="mfUploadAvatar(event)">
          </div>
          <div class="mf-fg"><label>Nombre completo</label><input type="text" id="mf-pname"></div>
          <div class="mf-fg"><label>Email</label><input type="email" id="mf-pemail" disabled></div>
          <div class="mf-fg"><label>Teléfono</label><input type="text" id="mf-pphone" placeholder="+56 9 xxxx xxxx"></div>
          <button class="mf-btn mf-btn-p" onclick="mfSaveProfile()">Guardar Cambios</button>
        </div>
      </div>

    </main>
  </div>
</div>

<!-- MODALES -->

<!-- Categoría -->
<div class="mf-overlay" id="mf-m-cat">
  <div class="mf-modal">
    <div class="mf-mh"><h3 class="mf-mtitle" id="mf-mcat-t">Nueva Categoría</h3>
      <button class="mf-mclose" onclick="mfCloseM('mf-m-cat')">✕</button></div>
    <div class="mf-fg"><label>Nombre</label><input type="text" id="mf-catname" placeholder="Ej: Sueldo, Freelance, Arriendo..."></div>
    <input type="hidden" id="mf-cattype">
    <div class="mf-mfoot">
      <button class="mf-btn mf-btn-g" onclick="mfCloseM('mf-m-cat')">Cancelar</button>
      <button class="mf-btn mf-btn-p" onclick="mfSaveCat()">Guardar</button>
    </div>
  </div>
</div>

<!-- Deuda -->
<div class="mf-overlay" id="mf-m-liab">
  <div class="mf-modal">
    <div class="mf-mh"><h3 class="mf-mtitle" id="mf-mliab-t">Nueva Deuda</h3>
      <button class="mf-mclose" onclick="mfCloseM('mf-m-liab')">✕</button></div>
    <div class="mf-fg"><label>Nombre de la deuda</label><input type="text" id="mf-liabname" placeholder="Ej: Tarjeta BCI, Crédito hipotecario..."></div>
    <div class="mf-2col">
      <div class="mf-fg"><label>Capital original</label><input type="number" id="mf-liabcap" placeholder="0"></div>
      <div class="mf-fg"><label>Tasa de interés anual (%)</label><input type="number" id="mf-liabrate" placeholder="0" step="0.1"></div>
    </div>
    <div class="mf-2col">
      <div class="mf-fg"><label>N° cuotas totales</label><input type="number" id="mf-liabinst" placeholder="0"></div>
      <div class="mf-fg"><label>Cuotas ya pagadas</label><input type="number" id="mf-liabpaid" placeholder="0"></div>
    </div>
    <div class="mf-fg"><label>¿Tiene garantía?</label>
      <select id="mf-liabgar"><option value="false">No</option><option value="true">Sí (hipotecaria, prendaria...)</option></select>
    </div>
    <div class="mf-fg">
      <label>O sube la tabla de amortización <span class="mf-ai" style="margin-left:6px">✦ IA</span></label>
      <div class="mf-upzone" style="padding:20px" onclick="document.getElementById('mf-liab-file').click()">
        <div class="mf-uptxt"><strong>PDF o Excel</strong> del banco · La IA leerá los datos</div>
      </div>
      <input type="file" id="mf-liab-file" accept=".pdf,.xlsx,.xls,.csv" style="display:none" onchange="mfLiabFileSelect(event)">
      <div id="mf-liab-file-name" style="font-size:12px;color:var(--gold);margin-top:6px"></div>
    </div>
    <input type="hidden" id="mf-liabtype">
    <div class="mf-mfoot">
      <button class="mf-btn mf-btn-g" onclick="mfCloseM('mf-m-liab')">Cancelar</button>
      <button class="mf-btn mf-btn-p" onclick="mfSaveLiab()">Guardar</button>
    </div>
  </div>
</div>

<!-- Amortización detalle -->
<div class="mf-overlay" id="mf-m-amort">
  <div class="mf-modal mf-modal-xl">
    <div class="mf-mh"><h3 class="mf-mtitle" id="mf-amort-title">Tabla de Amortización</h3>
      <button class="mf-mclose" onclick="mfCloseM('mf-m-amort')">✕</button></div>
    <div class="mf-3col mf-mb24" id="mf-amort-summary"></div>
    <div style="overflow-x:auto"><table class="mf-amort-tbl"><thead>
      <tr><th>N° Cuota</th><th>Fecha</th><th class="r">Capital</th><th class="r">Interés</th><th class="r">Cuota Total</th><th class="r">Saldo</th></tr>
    </thead><tbody id="mf-amort-tbody"></tbody></table></div>
    <div class="mf-mfoot"><button class="mf-btn mf-btn-g" onclick="mfCloseM('mf-m-amort')">Cerrar</button></div>
  </div>
</div>

<!-- Activo -->
<div class="mf-overlay" id="mf-m-asset">
  <div class="mf-modal">
    <div class="mf-mh"><h3 class="mf-mtitle" id="mf-masset-t">Nueva Inversión</h3>
      <button class="mf-mclose" onclick="mfCloseM('mf-m-asset')">✕</button></div>
    <div class="mf-fg"><label>Nombre</label><input type="text" id="mf-assetname" placeholder="Ej: Fintual, Depto Ñuñoa..."></div>
    <div class="mf-fg" id="mf-asset-inst-wrap"><label>Institución</label><input type="text" id="mf-assetinst" placeholder="Ej: Fintual, BTG..."></div>
    <input type="hidden" id="mf-assettype">
    <div class="mf-mfoot">
      <button class="mf-btn mf-btn-g" onclick="mfCloseM('mf-m-asset')">Cancelar</button>
      <button class="mf-btn mf-btn-p" onclick="mfSaveAsset()">Guardar</button>
    </div>
  </div>
</div>

<!-- Clasificar -->
<div class="mf-overlay" id="mf-m-classify">
  <div class="mf-modal mf-modal-lg">
    <div class="mf-mh"><h3 class="mf-mtitle">Clasificar <span class="mf-ai" style="margin-left:8px">✦ IA</span></h3>
      <button class="mf-mclose" onclick="mfCloseM('mf-m-classify')">✕</button></div>
    <p style="font-size:13px;color:var(--text);margin-bottom:14px">Revisa y confirma la clasificación de cada transacción.</p>
    <div id="mf-classify-list"></div>
    <div class="mf-mfoot">
      <button class="mf-btn mf-btn-g" onclick="mfCloseM('mf-m-classify')">Cancelar</button>
      <button class="mf-btn mf-btn-p" onclick="mfConfirmClassify()">Confirmar Todo</button>
    </div>
  </div>
</div>

<!-- Disclaimer primer ingreso -->
<div class="mf-overlay" id="mf-m-disclaimer">
  <div class="mf-modal mf-disclaimer">
    <div class="mf-disclaimer-icon">🔒</div>
    <div class="mf-mh" style="justify-content:center;margin-bottom:16px">
      <h3 class="mf-mtitle" style="text-align:center">Tus datos son completamente privados</h3>
    </div>
    <div style="font-size:14px;color:var(--text);line-height:1.8;text-align:center;margin-bottom:20px">
      <p style="margin-bottom:12px">La información que ingresas en <strong style="color:var(--gold)">Mis Finanzas</strong> es estrictamente confidencial.</p>
      <p style="margin-bottom:12px">Constanza Graell <strong>no tiene acceso, no examina ni utiliza</strong> ningún dato financiero personal que registres aquí.</p>
      <p style="font-size:12px;color:var(--muted)">Tus datos se almacenan de forma segura y cifrada, accesibles solo por ti.</p>
    </div>
    <button class="mf-btn mf-btn-p mf-btn-full" onclick="mfAcceptDisclaimer()">Entendido, continuar</button>
  </div>
</div>

</div><!-- #mf-root -->

<script src="https://cdn.jsdelivr.net/gh/conigraell-commits/misfinanzas@main/misfinanzas.js"></script>
