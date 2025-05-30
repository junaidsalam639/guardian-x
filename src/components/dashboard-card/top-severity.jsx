import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { AlertTriangle, CircleAlert, ShieldAlert, ShieldCheck } from 'lucide-react';

const severityIconMap = {
  high:     <AlertTriangle className="h-5 w-5 text-red-600" />,
  critical: <ShieldAlert   className="h-5 w-5 text-rose-700" />,
  medium:   <CircleAlert   className="h-5 w-5 text-yellow-500" />,
  low:      <ShieldCheck   className="h-5 w-5 text-green-600" />,
};

const severityBgMap = {
  high:     'bg-red-100',
  critical: 'bg-rose-100',
  medium:   'bg-yellow-100',
  low:      'bg-green-100',
};

const TopSeverity = ({ data = [] }) => {
  const top = data.reduce(
    (max, s) => (s.doc_count > (max?.doc_count ?? 0) ? s : max),
    null,
  );

  const topSeverityName = top?.key
    ? top.key.charAt(0).toUpperCase() + top.key.slice(1)
    : 'Severity';

  return (
    <Card className="shadow-md my-4">
      {/* ── Card header ─────────────────────────────────────────────────────── */}
      <CardHeader className="pb-3 border-b flex items-center justify-between">
        <CardTitle className="text-lg font-semibold flex items-center">
          <ShieldAlert className="mr-2 h-5 w-5 text-rose-700" />
          Top Severity Levels
        </CardTitle>
      </CardHeader>

      <CardContent className="p-6">
        <div className="mb-5 grid grid-cols-1 md:grid-cols-4 gap-4">
          {data.map((severity) => (
            <div
              key={severity.key}
              className="text-center p-4 dark:bg-[var(--sidebar)] bg-gray-50 rounded-lg border border-gray-200 flex flex-col items-center justify-center"
            >
              <div className="mb-2">
                <div
                  className={`p-2 rounded-full ${severityBgMap[severity.key] || 'bg-gray-100'}`}
                >
                  {severityIconMap[severity.key] || (
                    <AlertTriangle className="h-5 w-5 text-gray-600" />
                  )}
                </div>
              </div>
              <p className="text-xl font-semibold">{severity.doc_count}</p>
              <p className="text-xs text-gray-500 capitalize">{severity.key}</p>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <div className="flex items-start space-x-3 p-3 bg-rose-50 rounded-lg dark:bg-[var(--sidebar)]">
            <AlertTriangle className="h-5 w-5 text-rose-700 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="text-sm font-medium">
                {topSeverityName} severity alert triggered
              </h4>
              <p className="text-xs text-gray-600 mt-0.5">Review immediately</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TopSeverity;
