import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { AlertTriangle, CheckCircle, HardDrive, RefreshCcw, ShieldOff, UserCog } from 'lucide-react';

const iconMap = {
  blocked: <ShieldOff className="h-5 w-5 text-red-600" />,
  accept: <CheckCircle className="h-5 w-5 text-green-600" />,
  'administrator-login': <UserCog className="h-5 w-5 text-blue-600" />,
  'disk-usage-warning': <HardDrive className="h-5 w-5 text-amber-600" />,
  'firmware-update-started': <RefreshCcw className="h-5 w-5 text-indigo-600" />,
};

const bgMap = {
  blocked: 'bg-red-100',
  accept: 'bg-green-100',
  'administrator-login': 'bg-blue-100',
  'disk-usage-warning': 'bg-amber-100',
  'firmware-update-started': 'bg-indigo-100',
};

const TopActions = ({ data }) => {


  return (
    <Card className="shadow-md my-4">
      <CardHeader className="pb-3 border-b flex items-center justify-between">
        <CardTitle className="text-lg font-semibold flex items-center">
          <UserCog className="mr-2 h-5 w-5 text-blue-600" />
          Top Actions
        </CardTitle>
      </CardHeader>

      <CardContent className="p-6">
        <div className="mb-5 grid grid-cols-1 md:grid-cols-5 gap-4">
          {data?.map((action) => (
            <div
              key={action?.key}
              className="text-center dark:bg-[var(--sidebar)] p-4 bg-gray-50 rounded-lg border border-gray-200 flex flex-col items-center justify-center"
            >
              <div className={`p-2 rounded-full ${bgMap[action?.key] || 'bg-gray-100'}`}>
                {iconMap[action?.key] || (
                  <AlertTriangle className="h-5 w-5 text-gray-600" />
                )}
              </div>
              <p className="text-xl font-semibold mt-2">{action?.doc_count}</p>
              <p className="text-xs text-gray-500 capitalize mt-1">
                {action?.key?.replace(/-/g, ' ')}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TopActions;


