FROM python:3.7

RUN pip install fastapi uvicorn starlette requests numpy

COPY ./app /app

EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]