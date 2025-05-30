import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';
import React from 'react';

const AuthenticationFailedAttempts = ({ data }) => {
  return (
    <Card className="shadow-md my-4">
      <CardHeader className="pb-3 border-b flex items-center justify-between">
        <CardTitle className="text-lg font-semibold flex items-center">
          <AlertTriangle className="mr-2 h-5 w-5 text-red-600" />
          Authentication Failures
        </CardTitle>
      </CardHeader>

      <CardContent className="p-6">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="p-4 rounded-full bg-red-100">
            <AlertTriangle className="h-6 w-6 text-red-600" />
          </div>
          <h3 className="text-3xl font-bold">{data}</h3>
          <p className="text-sm text-gray-500">Total Failed Attempts</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AuthenticationFailedAttempts;
