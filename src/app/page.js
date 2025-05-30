import DashboardProvider from "./dashboard-provider";
import TopActions from "@/components/dashboard-card/top-actions";
import TopSeverity from "@/components/dashboard-card/top-severity";
import TopAttack from "@/components/dashboard-card/top-attack";
import TopSourceIp from "@/components/dashboard-card/top-source-ip";
import TopDestinationIp from "@/components/dashboard-card/top-destination-ip";
import TopSourceCountries from "@/components/dashboard-card/top-source-countries";
import TopDestinationCountries from "@/components/dashboard-card/top-destination-countries";
import AuthenticationFailedAttempts from "@/components/dashboard-card/authentication-failed-attempts";
import AuthenticationSuccessAttempts from "@/components/dashboard-card/authentication-success-attempts";
import TopUserLast24H from "@/components/dashboard-card/top-user-last-24h";
import TopSSHDSourceIp from "@/components/dashboard-card/top-sshd-src-ip";
import { basedUrl } from "@/lib/based-url";

export default async function Home() {

  const responseTopActions = await fetch(`${basedUrl}/top_actions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });
  const dataTopActions = await responseTopActions.json();

  const responseTopSeverity = await fetch(`${basedUrl}/top_severity`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });
  const dataTopSeverity = await responseTopSeverity.json();

  const responseTopAttack = await fetch(`${basedUrl}/top_attack`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });
  const dataTopAttack = await responseTopAttack.json();

  const responseTopSourceIp = await fetch(`${basedUrl}/top_sourceip`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });
  const dataTopSourceIp = await responseTopSourceIp.json();

  const responseTopDestinationIp = await fetch(`${basedUrl}/top_destinationip`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });
  const dataTopDestinationIp = await responseTopDestinationIp.json();

  const responseTopSourceCountries = await fetch(`${basedUrl}/top_source_countries`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });
  const dataTopSourceCountries = await responseTopSourceCountries.json();

  const responseTopDestinationCountries = await fetch(`${basedUrl}/top_destination_countries`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });
  const dataTopDestinationCountries = await responseTopDestinationCountries.json();

  const responseAuthenticationFailedAttempts = await fetch(`${basedUrl}/authentication_failed_attempts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });
  const dataAuthenticationFailedAttempts = await responseAuthenticationFailedAttempts.json();

  const responseAuthenticationSuccessAttempts = await fetch(`${basedUrl}/authentication_success_attempts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });
  const dataAuthenticationSuccessAttempts = await responseAuthenticationSuccessAttempts.json();

  const responseTopUserLast24H = await fetch(`${basedUrl}/top_users_last_24h`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });
  const dataTopUserLast24H = await responseTopUserLast24H.json();

  const responseTopSSHDSourceIp = await fetch(`${basedUrl}/top_sshd_srcip`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });
  const dataTopSSHDSourceIp = await responseTopSSHDSourceIp.json();

  return (
    <>
      <DashboardProvider>
        <div className="px-5">
          <TopActions data={dataTopActions?.top_actions} />
          <TopSeverity data={dataTopSeverity?.top_severity} />
          <TopAttack data={dataTopAttack?.top_attack} />
          <TopSourceIp data={dataTopSourceIp?.top_sourceip} />
          <TopDestinationIp data={dataTopDestinationIp?.top_destinationip} />
          <TopSourceCountries data={dataTopSourceCountries?.top_source_countries} />
          <TopDestinationCountries data={dataTopDestinationCountries?.top_destination_countries} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AuthenticationFailedAttempts data={dataAuthenticationFailedAttempts?.authentication_failed_count} />
          <AuthenticationSuccessAttempts data={dataAuthenticationSuccessAttempts?.authentication_success_count} />
          </div>
          <TopUserLast24H data={dataTopUserLast24H?.top_users} />
          <TopSSHDSourceIp data={dataTopSSHDSourceIp?.top_sshd_srcip} />
        </div>
      </DashboardProvider>
    </>
  );
}


