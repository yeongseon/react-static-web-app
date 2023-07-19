import logging
import json

import azure.functions as func


def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info("Python HTTP trigger function processed a request.")

    return func.HttpResponse(
        json.dumps({"text": "from the API"}),
        status_code=200,
        mimetype="application/json",
    )
