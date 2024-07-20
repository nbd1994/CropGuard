import { Card,CardHeader,CardContent,CardTitle } from "./components/ui/card";
import Loading from "./Loading";
function Response({ response,finished }) {
    return <Card className="w-6/12 mr-8 min-w-96 bg-zinc-600 text-white"  >
            <CardHeader>
                <CardTitle>
                    Response
                </CardTitle>
            </CardHeader>
            <CardContent >
                {finished?response:<Loading/>}
            </CardContent>
        </Card>
    
}export default Response;