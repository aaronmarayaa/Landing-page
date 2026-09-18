import { useEffect, useMemo, useRef, useState } from "react";
import { Check, ChevronDown, Search } from "lucide-react";

type Country = {
  code: string;
  name: string;
  dial: string;
};

const countries: Country[] = [
  { code: "AF", name: "Afghanistan", dial: "+93" },
  { code: "AX", name: "Aland Islands", dial: "+358" },
  { code: "AL", name: "Albania", dial: "+355" },
  { code: "DZ", name: "Algeria", dial: "+213" },
  { code: "AS", name: "American Samoa", dial: "+1684" },
  { code: "AD", name: "Andorra", dial: "+376" },
  { code: "AO", name: "Angola", dial: "+244" },
  { code: "AI", name: "Anguilla", dial: "+1264" },
  { code: "AG", name: "Antigua and Barbuda", dial: "+1268" },
  { code: "AR", name: "Argentina", dial: "+54" },
  { code: "AM", name: "Armenia", dial: "+374" },
  { code: "AW", name: "Aruba", dial: "+297" },
  { code: "AU", name: "Australia", dial: "+61" },
  { code: "AT", name: "Austria", dial: "+43" },
  { code: "AZ", name: "Azerbaijan", dial: "+994" },
  { code: "BS", name: "Bahamas", dial: "+1242" },
  { code: "BH", name: "Bahrain", dial: "+973" },
  { code: "BD", name: "Bangladesh", dial: "+880" },
  { code: "BB", name: "Barbados", dial: "+1246" },
  { code: "BY", name: "Belarus", dial: "+375" },
  { code: "BE", name: "Belgium", dial: "+32" },
  { code: "BZ", name: "Belize", dial: "+501" },
  { code: "BJ", name: "Benin", dial: "+229" },
  { code: "BM", name: "Bermuda", dial: "+1441" },
  { code: "BT", name: "Bhutan", dial: "+975" },
  { code: "BO", name: "Bolivia", dial: "+591" },
  { code: "BA", name: "Bosnia and Herzegovina", dial: "+387" },
  { code: "BW", name: "Botswana", dial: "+267" },
  { code: "BR", name: "Brazil", dial: "+55" },
  { code: "BN", name: "Brunei", dial: "+673" },
  { code: "BG", name: "Bulgaria", dial: "+359" },
  { code: "BF", name: "Burkina Faso", dial: "+226" },
  { code: "BI", name: "Burundi", dial: "+257" },
  { code: "KH", name: "Cambodia", dial: "+855" },
  { code: "CM", name: "Cameroon", dial: "+237" },
  { code: "CA", name: "Canada", dial: "+1" },
  { code: "CV", name: "Cape Verde", dial: "+238" },
  { code: "KY", name: "Cayman Islands", dial: "+1345" },
  { code: "CF", name: "Central African Republic", dial: "+236" },
  { code: "TD", name: "Chad", dial: "+235" },
  { code: "CL", name: "Chile", dial: "+56" },
  { code: "CN", name: "China", dial: "+86" },
  { code: "CO", name: "Colombia", dial: "+57" },
  { code: "KM", name: "Comoros", dial: "+269" },
  { code: "CR", name: "Costa Rica", dial: "+506" },
  { code: "HR", name: "Croatia", dial: "+385" },
  { code: "CU", name: "Cuba", dial: "+53" },
  { code: "CY", name: "Cyprus", dial: "+357" },
  { code: "CZ", name: "Czech Republic", dial: "+420" },
  { code: "DK", name: "Denmark", dial: "+45" },
  { code: "DJ", name: "Djibouti", dial: "+253" },
  { code: "DM", name: "Dominica", dial: "+1767" },
  { code: "DO", name: "Dominican Republic", dial: "+1809" },
  { code: "EC", name: "Ecuador", dial: "+593" },
  { code: "EG", name: "Egypt", dial: "+20" },
  { code: "SV", name: "El Salvador", dial: "+503" },
  { code: "EE", name: "Estonia", dial: "+372" },
  { code: "ET", name: "Ethiopia", dial: "+251" },
  { code: "FJ", name: "Fiji", dial: "+679" },
  { code: "FI", name: "Finland", dial: "+358" },
  { code: "FR", name: "France", dial: "+33" },
  { code: "GE", name: "Georgia", dial: "+995" },
  { code: "DE", name: "Germany", dial: "+49" },
  { code: "GH", name: "Ghana", dial: "+233" },
  { code: "GR", name: "Greece", dial: "+30" },
  { code: "GD", name: "Grenada", dial: "+1473" },
  { code: "GU", name: "Guam", dial: "+1671" },
  { code: "GT", name: "Guatemala", dial: "+502" },
  { code: "GY", name: "Guyana", dial: "+592" },
  { code: "HT", name: "Haiti", dial: "+509" },
  { code: "HN", name: "Honduras", dial: "+504" },
  { code: "HK", name: "Hong Kong", dial: "+852" },
  { code: "HU", name: "Hungary", dial: "+36" },
  { code: "IS", name: "Iceland", dial: "+354" },
  { code: "IN", name: "India", dial: "+91" },
  { code: "ID", name: "Indonesia", dial: "+62" },
  { code: "IR", name: "Iran", dial: "+98" },
  { code: "IQ", name: "Iraq", dial: "+964" },
  { code: "IE", name: "Ireland", dial: "+353" },
  { code: "IL", name: "Israel", dial: "+972" },
  { code: "IT", name: "Italy", dial: "+39" },
  { code: "JM", name: "Jamaica", dial: "+1876" },
  { code: "JP", name: "Japan", dial: "+81" },
  { code: "JO", name: "Jordan", dial: "+962" },
  { code: "KZ", name: "Kazakhstan", dial: "+7" },
  { code: "KE", name: "Kenya", dial: "+254" },
  { code: "KW", name: "Kuwait", dial: "+965" },
  { code: "KG", name: "Kyrgyzstan", dial: "+996" },
  { code: "LA", name: "Laos", dial: "+856" },
  { code: "LV", name: "Latvia", dial: "+371" },
  { code: "LB", name: "Lebanon", dial: "+961" },
  { code: "LS", name: "Lesotho", dial: "+266" },
  { code: "LR", name: "Liberia", dial: "+231" },
  { code: "LY", name: "Libya", dial: "+218" },
  { code: "LI", name: "Liechtenstein", dial: "+423" },
  { code: "LT", name: "Lithuania", dial: "+370" },
  { code: "LU", name: "Luxembourg", dial: "+352" },
  { code: "MO", name: "Macao", dial: "+853" },
  { code: "MY", name: "Malaysia", dial: "+60" },
  { code: "MV", name: "Maldives", dial: "+960" },
  { code: "ML", name: "Mali", dial: "+223" },
  { code: "MT", name: "Malta", dial: "+356" },
  { code: "MX", name: "Mexico", dial: "+52" },
  { code: "MD", name: "Moldova", dial: "+373" },
  { code: "MC", name: "Monaco", dial: "+377" },
  { code: "MN", name: "Mongolia", dial: "+976" },
  { code: "ME", name: "Montenegro", dial: "+382" },
  { code: "MA", name: "Morocco", dial: "+212" },
  { code: "MZ", name: "Mozambique", dial: "+258" },
  { code: "MM", name: "Myanmar", dial: "+95" },
  { code: "NA", name: "Namibia", dial: "+264" },
  { code: "NP", name: "Nepal", dial: "+977" },
  { code: "NL", name: "Netherlands", dial: "+31" },
  { code: "NZ", name: "New Zealand", dial: "+64" },
  { code: "NI", name: "Nicaragua", dial: "+505" },
  { code: "NE", name: "Niger", dial: "+227" },
  { code: "NG", name: "Nigeria", dial: "+234" },
  { code: "MK", name: "North Macedonia", dial: "+389" },
  { code: "NO", name: "Norway", dial: "+47" },
  { code: "OM", name: "Oman", dial: "+968" },
  { code: "PK", name: "Pakistan", dial: "+92" },
  { code: "PA", name: "Panama", dial: "+507" },
  { code: "PG", name: "Papua New Guinea", dial: "+675" },
  { code: "PY", name: "Paraguay", dial: "+595" },
  { code: "PE", name: "Peru", dial: "+51" },
  { code: "PH", name: "Philippines", dial: "+63" },
  { code: "PL", name: "Poland", dial: "+48" },
  { code: "PT", name: "Portugal", dial: "+351" },
  { code: "PR", name: "Puerto Rico", dial: "+1787" },
  { code: "QA", name: "Qatar", dial: "+974" },
  { code: "RO", name: "Romania", dial: "+40" },
  { code: "RU", name: "Russia", dial: "+7" },
  { code: "RW", name: "Rwanda", dial: "+250" },
  { code: "SA", name: "Saudi Arabia", dial: "+966" },
  { code: "SN", name: "Senegal", dial: "+221" },
  { code: "RS", name: "Serbia", dial: "+381" },
  { code: "SC", name: "Seychelles", dial: "+248" },
  { code: "SG", name: "Singapore", dial: "+65" },
  { code: "SK", name: "Slovakia", dial: "+421" },
  { code: "SI", name: "Slovenia", dial: "+386" },
  { code: "ZA", name: "South Africa", dial: "+27" },
  { code: "KR", name: "South Korea", dial: "+82" },
  { code: "ES", name: "Spain", dial: "+34" },
  { code: "LK", name: "Sri Lanka", dial: "+94" },
  { code: "SE", name: "Sweden", dial: "+46" },
  { code: "CH", name: "Switzerland", dial: "+41" },
  { code: "TW", name: "Taiwan", dial: "+886" },
  { code: "TH", name: "Thailand", dial: "+66" },
  { code: "TR", name: "Turkey", dial: "+90" },
  { code: "UG", name: "Uganda", dial: "+256" },
  { code: "UA", name: "Ukraine", dial: "+380" },
  { code: "AE", name: "United Arab Emirates", dial: "+971" },
  { code: "GB", name: "United Kingdom", dial: "+44" },
  { code: "US", name: "United States", dial: "+1" },
  { code: "UY", name: "Uruguay", dial: "+598" },
  { code: "UZ", name: "Uzbekistan", dial: "+998" },
  { code: "VE", name: "Venezuela", dial: "+58" },
  { code: "VN", name: "Vietnam", dial: "+84" },
  { code: "YE", name: "Yemen", dial: "+967" },
  { code: "ZM", name: "Zambia", dial: "+260" },
  { code: "ZW", name: "Zimbabwe", dial: "+263" },
];

function flagEmoji(code: string) {
  return code
    .toUpperCase()
    .replace(/./g, (char) =>
      String.fromCodePoint(127397 + char.charCodeAt(0))
    );
}

export default function PhoneInput() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selected, setSelected] = useState<Country>(
    countries.find((country) => country.code === "CA") || countries[0]
  );

  const wrapperRef = useRef<HTMLDivElement>(null);

  const filteredCountries = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return countries;

    return countries.filter((country) =>
      `${country.name} ${country.dial}`
        .toLowerCase()
        .includes(query)
    );
  }, [search]);

  // E.164 allows a maximum of 15 digits for the complete international number.
  // We subtract the selected country calling code so the local-number field
  // cannot exceed the international maximum.
  const dialDigits = selected.dial.replace(/\D/g, "").length;
  const maxLocalDigits = Math.max(4, 15 - dialDigits);

  useEffect(() => {
    function onDocumentPointerDown(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", onDocumentPointerDown);
    return () =>
      document.removeEventListener("mousedown", onDocumentPointerDown);
  }, []);

  return (
    <div ref={wrapperRef} className="relative grid gap-2 text-left">
      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-white/42">
        Phone number
      </span>

      <input
        type="hidden"
        name="phoneCountry"
        value={`${selected.name} (${selected.dial})`}
      />

      <div className="flex h-14 overflow-visible rounded-2xl border border-white/[0.10] bg-white/[0.045] transition focus-within:border-[#1680a5]/65 focus-within:bg-white/[0.06]">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-haspopup="listbox"
          aria-expanded={open}
          className="flex min-w-[116px] items-center gap-2 border-r border-white/[0.08] px-3 text-white/80 transition-colors hover:bg-white/[0.04]"
        >
          <span className="text-xl leading-none">
            {flagEmoji(selected.code)}
          </span>
          <span className="text-sm font-medium">{selected.dial}</span>
          <ChevronDown
            className={`ml-auto h-4 w-4 text-white/35 transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        <input
          required
          name="phone"
          type="tel"
          inputMode="numeric"
          autoComplete="tel"
          placeholder="Phone number"
          value={phoneNumber}
          onChange={(event) => {
            const digitsOnly = event.target.value.replace(/\D/g, "");
            setPhoneNumber(digitsOnly.slice(0, maxLocalDigits));
          }}
          pattern="[0-9]{4,}"
          title={`Enter 4 to ${maxLocalDigits} digits for the local phone number.`}
          className="min-w-0 flex-1 bg-transparent px-4 text-sm text-white outline-none placeholder:text-white/22"
        />
      </div>

      <div className="flex items-center justify-between gap-3 px-1 text-[10px] text-white/28">
        <span>International maximum: 15 digits including country code</span>
        <span>
          {phoneNumber.length}/{maxLocalDigits}
        </span>
      </div>

      {open && (
        <div className="absolute left-0 top-[100px] z-[80] w-full max-w-md overflow-hidden rounded-[1.4rem] border border-white/[0.12] bg-[#0c1921]/98 shadow-[0_26px_80px_rgba(0,0,0,.50)] backdrop-blur-2xl">
          <div className="border-b border-white/[0.08] p-3">
            <div className="flex h-11 items-center gap-2 rounded-xl border border-white/[0.10] bg-white/[0.04] px-3">
              <Search className="h-4 w-4 text-white/35" />
              <input
                autoFocus
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search country or code"
                className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/28"
              />
            </div>
          </div>

          <div
            role="listbox"
            className="max-h-72 overflow-y-auto overscroll-contain py-1"
          >
            {filteredCountries.map((country) => {
              const active = country.code === selected.code;

              return (
                <button
                  key={`${country.code}-${country.dial}`}
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => {
                    const nextDialDigits = country.dial.replace(/\D/g, "").length;
                    const nextMaxLocalDigits = Math.max(4, 15 - nextDialDigits);

                    setSelected(country);
                    setPhoneNumber((current) =>
                      current.slice(0, nextMaxLocalDigits)
                    );
                    setOpen(false);
                    setSearch("");
                  }}
                  className={`flex w-full items-center gap-3 px-4 py-3 text-left transition-colors ${
                    active
                      ? "bg-white/[0.08]"
                      : "hover:bg-white/[0.05]"
                  }`}
                >
                  <span className="w-7 text-xl leading-none">
                    {flagEmoji(country.code)}
                  </span>

                  <span className="min-w-0 flex-1 truncate text-sm text-white/78">
                    {country.name}
                  </span>

                  <span className="text-sm text-white/38">
                    {country.dial}
                  </span>

                  {active && (
                    <Check className="h-4 w-4 shrink-0 text-[#d98b2b]" />
                  )}
                </button>
              );
            })}

            {filteredCountries.length === 0 && (
              <div className="px-4 py-8 text-center text-sm text-white/35">
                No country found.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
