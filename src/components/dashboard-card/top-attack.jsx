import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  ShieldX,
  Bug,
  Code,
  ShieldAlert,
  Lock,
  AlertTriangle,
} from 'lucide-react';

const attackIconMap = {
  'phishing-attempt': <ShieldAlert className="h-5 w-5 text-rose-600" />,
  'xss-attack': <Code className="h-5 w-5 text-blue-600" />,
  'brute-force-attempt': <Lock className="h-5 w-5 text-orange-600" />,
  'malware-download': <Bug className="h-5 w-5 text-purple-600" />,
  'sql-injection': <ShieldX className="h-5 w-5 text-red-600" />,
};

const attackBgMap = {
  'phishing-attempt': 'bg-rose-100',
  'xss-attack': 'bg-blue-100',
  'brute-force-attempt': 'bg-orange-100',
  'malware-download': 'bg-purple-100',
  'sql-injection': 'bg-red-100',
};

const TopAttack = ({data}) => {

  const topAttack = data?.reduce((max, attack) =>
    attack.doc_count > (max?.doc_count || 0) ? attack : max,
  null);

  const formattedAttackName = topAttack?.key?.replace(/-/g, ' ') || 'attack';

  return (
    <Card className="shadow-md my-4">
      <CardHeader className="pb-3 border-b flex items-center justify-between">
        <CardTitle className="text-lg font-semibold flex items-center">
          <ShieldAlert className="mr-2 h-5 w-5 text-red-600" />
          Top Attack Types
        </CardTitle>
      </CardHeader>

      <CardContent className="p-6">
        <div className="mb-5 grid grid-cols-1 md:grid-cols-3 gap-4">
          {data?.map((attack) => (
            <div
              key={attack?.key}
              className="text-center p-4 dark:bg-[var(--sidebar)] bg-gray-50 rounded-lg border border-gray-200 flex flex-col items-center justify-center"
            >
              <div className="flex justify-center mb-2">
                <div className={`p-2 rounded-full ${attackBgMap[attack?.key] || 'bg-gray-100'}`}>
                  {attackIconMap[attack?.key] || (
                    <AlertTriangle className="h-5 w-5 text-gray-600" />
                  )}
                </div>
              </div>
              <p className="text-xl font-semibold">{attack?.doc_count}</p>
              <p className="text-xs text-gray-500 capitalize">
                {attack?.key?.replace(/-/g, ' ')}
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg dark:bg-[var(--sidebar)]">
            <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="text-sm font-medium">Multiple {formattedAttackName} detected</h4>
              <p className="text-xs text-gray-600 mt-0.5">Just now from 5 different IPs</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TopAttack;
